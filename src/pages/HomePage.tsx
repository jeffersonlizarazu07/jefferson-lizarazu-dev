import { Box } from "@mui/material";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { TechRow } from "../components/home/TechRow.js";
import { Hero } from "../components/home/Hero.js";

export const HomePage = () => {
  // const [repos, setRepos] = useState([]);
  // const [data, setData] = useState([]);

  // const getRepositories = async () => {
  //   try {
  //     const response =
  //       await fetch`https://api.github.com/users/jeffersonlizarazu07/repos`;

  //     const data = await response.json();
  //     return data;
  //   } catch {
  //     const error = new Error("Repositorio no encontrado", error);
  //   }
  //   getRepositories();
  // };
  // console.log(data);

  // const ThemeConfigCode = () => {
  //   const symbolColor = "#89ddff";

  return (
    <Box
      sx={{
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
        pt: 6, px: 6, pb: 0
      }}
    >
      <Header />
      <Hero />
      <TechRow />
      <Footer />
    </Box>
  );
};
