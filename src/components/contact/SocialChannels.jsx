import { Stack, Typography, Card, Avatar, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RemoveIcon from "@mui/icons-material/Remove";
import GitHubIcon from "@mui/icons-material/GitHub";

export const SocialChannels = () => {
  const socialsAndIcons = [
    { name: "LinkedIn", Icon: LinkedInIcon },
    { name: "GitHub", Icon: GitHubIcon },
  ];

  return (
    <Stack spacing={3}>
      <Typography
        variant="h6"
        fontWeight={900}
        sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
      >
        <RemoveIcon sx={{ width: "100px", fontSize: "80px" }} />
        Social Channels
      </Typography>
      {socialsAndIcons.map((item, index) => {
        const { Icon, name } = item;
        return (
          <Card
            key={index}
            sx={{
              p: 2,
              border: "1px solid",
              borderRadius: 2,
              borderColor: "#94a3b8",
              transition: "0.3s",
              bgcolor: "#0B1623",

              "&:hover": {
                transform: "translateX(8px)",
                borderColor: "primary.main",
              },
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    backgroundColor: "#1e293b",
                    padding: "1px",
                    width: 45,
                    height: 45,
                    transition: "0.3s",
                  }}
                >
                  <Icon
                    sx={{ color: "#94a3b8", fontSize: "2rem", boxShadow: 5 }}
                  />
                </Avatar>
                <Typography fontWeight={500} color="#ffffff">
                  {name}
                </Typography>
              </Box>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};
