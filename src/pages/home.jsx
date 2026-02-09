import { Box, Typography } from "@mui/material";
import { Header, MainCard, ContactForm, Footer } from "../components";
import { useState } from "react";
// import Header from "../components/Header";
import Profile from "../components/Profile";
import SocialLinks from "../components/SocialLinks";
import CTAButton from "../components/CTAButton";
import BottomNav from "../components/BottomNav";

export const FrontPage = () => {
  // const [repos, setRepos] = useState([]);
  const [data, setData] = useState([]);

  const getRepositories = async () => {
    try {
      const response =
        await fetch`https://api.github.com/users/jeffersonlizarazu07/repos`;

      const data = await response.json();
      return data;
    } catch {
      const error = new Error("Repositorio no encontrado", error);
    }
    getRepositories();
  };
  console.log(data);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{
        background: "linear-gradient(180deg, #0B1623, #0F1F30)",
      }}
    >
      <Header />

      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        <Profile />
        <SocialLinks />
        <CTAButton />
      </Box>

      <BottomNav />
    </Box>
  );
};
