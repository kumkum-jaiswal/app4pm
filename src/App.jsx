import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import About from "./component/About";
import Display from "./component/Display";
import Insert from "./component/Insert";
import Search from "./component/Search";
import Update from "./component/Update";
import EditData from "./component/EditData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/display" element={<Display />} />
            <Route path="/search" element={<Search />} />
            <Route path="/update" element={<Update />} />
            <Route path="/myedit/:id" element={<EditData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
