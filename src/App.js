import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Maintenance from "./pages/maintenance";
import Contacts from "./pages/contacts";
import Services from "./pages/services";
const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contacts/>} />
        <Route path="servicos" element={<Services/>} />
        <Route path="*" element={<Maintenance/>} />
        {/* <Route path="" element={<Services/>} /> */}

        {/* <Route path="duvidas-frequentes" element={<Duvidas />} /> */}

        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
           */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
