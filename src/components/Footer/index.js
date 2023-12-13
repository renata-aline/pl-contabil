import "./index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_social-media">
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5538991268228"
          target="_blank"
          className="footer_social-media-link"
        >
          <WhatsAppIcon fontSize="inherit" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/Plservicos"
          target="_blank"
          className="footer_social-media-link"
        >
          <InstagramIcon fontSize="inherit" />
        </a>
        <a
          rel="noreferrer"
          href="mailto:plservicos2018@gmail.com"
          target="_blank"
          className="footer_social-media-link"
        >
          <MailOutlineIcon fontSize="inherit" />
        </a>
      </div>
      <div className="footer_brand">
        <img src="./images/logo-pl.png" alt="logo da empresa PL-Contabilidade" />
        <h1 className="footer_brand-text">
          Prestação de Serviços e Contabilidade
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
