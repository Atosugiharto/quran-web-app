import { useState, useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ListSurat() {
  const [daftarSurat, setDaftarSurat] = useState([]);
  const baseUrl = "https://equran.id/api/surat";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getdaftarSurat = async () => {
    const res = await fetch(`${baseUrl}`, {
      method: "GET",
    });
    const data = await res.json();
    setDaftarSurat(data);
    // console.log(data);
  };
  useEffect(() => {
    getdaftarSurat();
  }, []);

  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Quran Web App
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                DAFTAR SURAH
              </span>
            </h1>
            <div className="flow-root mt-6">
              <ul className="-mb-8">
                {daftarSurat?.map((surat, index) => (
                  <Link to={`surah/${surat?.nomor}`} key={surat?.nomor}>
                    <div className="relative pb-8">
                      {index !== daftarSurat?.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          >
                            <BookOpenIcon
                              className="text-white h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-medium font-semibold text-gray-500">
                              {surat?.nama}
                            </p>
                            <p className="text-sm font-semibold text-gray-900">
                              {surat?.nama_latin}
                              {` (${surat?.arti})`}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <p>{surat?.nomor}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListSurat;
