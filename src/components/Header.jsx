import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ background: "transparent" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight="bold">DevPortfolio</Typography>

        <Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
