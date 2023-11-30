import styled from "styled-components";
import Layout from "../components/Layout";

const MaintenanceImg = styled.img`
  width: 100%;
  margin-top: 50px;
`;
const LinkRedirect = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  text-align: center;
`;

const Maintenance = () => {
  return (
    <Layout>
      <MaintenanceImg src="images/manutencao.png" alt="página em manutenção" />
      <LinkRedirect href="/">Voltar para página principal</LinkRedirect>
    </Layout>
  );
};
export default Maintenance;
