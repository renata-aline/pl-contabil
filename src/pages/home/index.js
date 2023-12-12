import "./index.css";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <>
      <Layout slides={["images/slider3.jpg", "images/images.jpeg","images/images1.jpeg"]}>
        <section className="home">
          <p>
            Nossa assessoria dará a seu negócio a tranquilidade e eficiência na
            gestão fiscal e contábil! Dedique seu tempo ao crescimento da
            empresa, deixe a gestão da contabilidade conosco!
          </p>
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5538991268228"
            target="_blank"
          >
            <button>Contate-nos!</button>
          </a>
        </section>
      </Layout>
    </>
  );
};
export default Home;
