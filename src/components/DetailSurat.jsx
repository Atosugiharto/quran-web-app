import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InformationCircleIcon as InfoIcon } from "@heroicons/react/outline";
import Footer from "./Footer";

function DetailSurat() {
  const baseUrl = "https://equran.id/api/surat";
  const { nomor } = useParams();
  const [namaSurat, setNamaSurat] = useState("");
  const [ayat, setAyat] = useState([]);
  const [namaLatin, setNamaLatin] = useState("");
  const [arti, setArti] = useState("");
  // console.log(useParams())
  // console.log(nomor);

  const getSuratDetail = async () => {
    const res = await fetch(`${baseUrl}/${nomor}`, {
      method: "GET",
    });
    const surat = await res.json();
    setNamaSurat(surat?.nama);
    setAyat(surat?.ayat);
    setNamaLatin(surat?.nama_latin);
    setArti(surat?.arti);
  };
  useEffect(() => {
    getSuratDetail();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4 flex-shrink-0">
              <Link
                to={"/"}
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Daftar Surah
              </Link>
            </div>
            <div className="ml-4 mt-4">
            {/* <InfoIcon className="bg-white h-5 w-5 text-blue-600"/> */}
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">
              {namaSurat}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {namaLatin} {`(${arti})`}
              </p>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {namaSurat.nama}
          {ayat?.map((ayat) => (
            <li className="px-4 py-4 sm:px-0">
              <p className="text-lg md:text-xl font-sans font-semibold mb-4 text-right pr-4">
                {ayat?.ar}
              </p>
              <p className="text-sm font-normal text-gray-500 text-left pl-4">
                {`[${ayat?.nomor}] `}
                {ayat?.idn}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
    
  );
}

export default DetailSurat;
