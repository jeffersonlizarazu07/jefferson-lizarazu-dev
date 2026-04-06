import { Stack, StackProps, Link } from "@mui/material";
import { Link as Router } from "react-router-dom";

type NavLinksProps = {
  direction?: StackProps["direction"];
  spacing?: number;
};

export const NavLinks = ({ direction = "row", spacing = 4 }: NavLinksProps) => {
  const navLinksArray = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Proyectos" },
    { to: "/about", label: "Sobre mí" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      sx={{
        display: { xs: "none", md: "flex" },
        "& a:hover": { color: (theme) => theme.palette.grey[500] },
      }}
    >
      {navLinksArray.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          component={Router}
          color="primary.main"
          underline="none"
        >
          {label}
        </Link>
      ))}
    </Stack>
  );
};
