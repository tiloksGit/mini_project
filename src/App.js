import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Cse from "./Routes/Cse";
import Ee from "./Routes/Ee";
import Ce from "./Routes/Ce";
import Footer from "./Components/Footer";
import Ie from "./Routes/Ie";
import Me from "./Routes/Me";
import Profile from "./Routes/Profile";
import Register from "./Routes/Register";
import AuthenticateUser from "./Components/AuthenticateUser";
import Welcome from "./Routes/Welcome";
import { DataProvider } from "./LoginContext";
function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<AuthenticateUser />} />
          <Route path="/exclusive" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="cse" element={<Cse />} />
            <Route path="ee" element={<Ee />} />
            <Route path="ce" element={<Ce />} />
            <Route path="ie" element={<Ie />} />
            <Route path="me" element={<Me />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
