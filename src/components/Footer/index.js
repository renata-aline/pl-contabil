import "./index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_social-media">
        <a href="https://www.instagram.com/Plservicos" target="_blank">
          <InstagramIcon fontSize="inherit" />
        </a>
        <a href="mailto:plservicos2018@gmail.com" target="_blank">
          <MailOutlineIcon fontSize="inherit" />
        </a>
      </div>
      <div className="footer_brand">
        <img src="/image/logo-pl.jpg" alt="logo da empresa PL-Contabilidade" />
        <p className="footer_brand-text">
          Prestação de Serviços e Contabilidade
        </p>
      </div>
    </footer>
  );
};

export default Footer;
