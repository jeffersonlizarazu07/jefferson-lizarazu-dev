import { Stack, StackProps, Link } from "@mui/material";
import { Link as Router } from "react-router-dom";
import { navLinksArray } from "../../../constants/navLinksArray";

type NavLinksProps = {
  direction?: StackProps["direction"];
  spacing?: number;
};

export const NavLinks = ({ direction = "row", spacing = 4 }: NavLinksProps) => {

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
