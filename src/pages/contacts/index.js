import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Layout from "../../components/Layout";
import "./index.css";

const Contacts = () => {
  return (
    <Layout slides={["images/images2.jpeg"]}>
      <section className="contacts">
        <div className="contacts_info">
          <LocalPhoneIcon />
          <a href="tel:">(38) 99113-5029</a>
          <a href="tel:">(38) 99126-8228</a>
        </div>
        <div className="contacts_info">
          <MailIcon />
          <a href="mailto:plcontabilidade2018@gmail.com" target="_blank" rel="noreferrer">
            plcontabilidade2018@gmail.com{" "}
          </a>
          <a href="mailto:plservicos2018@gmail.com" target="_blank" rel="noreferrer">
            {" "}
            plservicos2018@gmail.com
          </a>
        </div>
        <div className="contacts_info">
          <LocationOnIcon />
          <a href="https://maps.app.goo.gl/yiw5s16PZvq1mNjK7" rel="noreferrer">
            Rua: Bahia, 267, Turmalina MG
            <br />
            <span>CEP: 39660-000</span>{" "}
          </a>
        </div>
        <div className="container-map">
          <iframe
            title="endereço"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.751900230017!2d-42.7265288!3d-17.279233899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad4321cd88c113%3A0x13868b4bb0fc3d40!2sR.%20Bahia%2C%20267%20-%20Turmalina%2C%20MG%2C%2039660-000!5e0!3m2!1spt-BR!2sbr!4v1701378879812!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
