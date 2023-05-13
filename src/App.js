import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Cse from "./Routes/Cse";
import Ee from "./Routes/Ee";
import Ce from "./Routes/Ce";
import Footer from "./Components/Footer";
import Ie from "./Routes/Ie";
import Me from "./Routes/Me";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/ee" element={<Ee />} />
          <Route path="/ce" element={<Ce />} />
          <Route path="/ie" element={<Ie />} />
          <Route path="/me" element={<Me />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
