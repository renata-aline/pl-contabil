import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Maintenance from "./pages/maintenance";
import Contacts from "./pages/contacts";
import Services from "./pages/services";
const App = () => {
  return (
    
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contacts/>} />
        <Route path="servicos" element={<Services/>} />
        <Route path="*" element={<Maintenance/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
