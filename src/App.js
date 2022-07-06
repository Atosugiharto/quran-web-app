import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListSurat from "./components/ListSurat";
import DetailSurat from "./components/DetailSurat";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListSurat />}></Route>
        <Route path="surah/:nomor" element={<DetailSurat />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
