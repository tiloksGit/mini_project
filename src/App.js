import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Cse1 from "./Routes/CSE/Cse1";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="cse" element={<Cse1 />} />
      </Route>
    </Routes>
  );
}

export default App;
