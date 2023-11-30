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
          <p>
            (38) 99113-5029
            <br />
            (38) 99126-8228
          </p>
        </div>
        <div className="contacts_info">
          <MailIcon />
          <p>
            plcontabilidade2018@gmail.com <br />
            plservicos2018@gmail.com
          </p>
        </div>
        <div className="contacts_info">
          <LocationOnIcon />
          <p>Rua: Bahia, 267, Turmalina MG</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
