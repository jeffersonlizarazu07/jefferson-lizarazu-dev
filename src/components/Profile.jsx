import { Box, Avatar, Typography } from "@mui/material";

export const Profile = () => {
  return (
    <Box textAlign="center">
      <Box position="relative" display="inline-block">
        <Avatar
          src="/profile.jpg"
          sx={{
            width: 140,
            height: 140,
            border: "4px solid #2F80ED",
          }}
        />

        <Box
          sx={{
            width: 14,
            height: 14,
            bgcolor: "#27AE60",
            borderRadius: "50%",
            position: "absolute",
            bottom: 12,
            right: 12,
          }}
        />
      </Box>

      <Typography variant="h5" mt={3} fontWeight={600}>
        Hola, soy{" "}
        <Box component="span" color="#2F80ED">
          Desarrollador
        </Box>
      </Typography>

      <Typography variant="h5" fontWeight={600} color="#2F80ED">
        Fullstack
      </Typography>

      <Typography mt={2} color="text.secondary" fontSize={15}>
        Especialista en React y Material UI
      </Typography>

      <Typography mt={1} color="text.secondary" fontSize={14}>
        📍 Madrid, España
      </Typography>
    </Box>
  );
};
