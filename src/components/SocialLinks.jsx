import { Box, IconButton, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const SocialLinks = () => {
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <SocialItem icon={<CodeIcon />} label="GITHUB" />
      <SocialItem icon={<LinkedInIcon />} label="LINKEDIN" />
      <SocialItem icon={<EmailIcon />} label="EMAIL" />
    </Box>
  );
}

function SocialItem({ icon, label }) {
  return (
    <Box textAlign="center">
      <IconButton sx={iconStyle}>{icon}</IconButton>
      <Typography mt={1} fontSize={11} color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

const iconStyle = {
  bgcolor: "#1A2B40",
  width: 52,
  height: 52,
  color: "white",
  borderRadius: 3,
  "&:hover": {
    bgcolor: "#223B5A",
  },
};
