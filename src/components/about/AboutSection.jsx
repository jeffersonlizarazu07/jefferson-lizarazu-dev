import { Grid, Box, Typography, Button, Stack, Chip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export const AboutSection = () => {
  return (
    <Grid container spacing={10} alignItems="center" mb={20}>
      {/* Image */}
      <Grid size={{ xs: 12, lg: 5 }}>
        <Box sx={{ position: "relative", maxWidth: 400, mx: "auto" }}>
          <Box
            component="img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiOjaym-ny1MDTnxPAGmTry3G2Dh5WoUS9t0rlQb_4dlfzgrd3IN0fIoJtsEbtvlu9h-89J-y_5pgIvwQ_Nmuo5Q6soLj1611l8IjtsMxwCfNIE9KsTaUid48hmyj39sTFHMx7wbzRGEDfoZgQVdvgW1v1EjgeHgTyjTjd3HpCNgs5l04zRVom2UYx0BrFl4C81VbB6_MVmgbsujQxR3Fe-3TyY97iZZADbiK3yo_rC7Md20YrS40r8FkzAMloigpbrxozUfSbqg4"
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "0.6s",
              "&:hover": {
                filter: "grayscale(0%)",
              },
            }}
          />

          {/* Experience Badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: -20,
              right: -20,
              bgcolor: "primary.main",
              color: "white",
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            }}
          >
            <Typography variant="h4" fontWeight={800}>
              8+
            </Typography>
            <Typography variant="caption" sx={{ letterSpacing: 2 }}>
              YEARS EXP
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Content */}
      <Grid size={{ xs: 12, lg: 7 }}>
        <Stack spacing={5}>
          <Chip
            label="About me"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              width: "fit-content",
              fontWeight: 700,
            }}
          />

          <Typography variant="h3" fontWeight={800}>
            Building digital experiences with{" "}
            <Box component="span" color="primary.main">
              precision.
            </Box>
          </Typography>

          <Typography color="#ffffff" fontSize={18}>
            I am a Senior Full-Stack Developer passionate about crafting
            high-performance web applications that merge elegant design with
            robust engineering.
          </Typography>

          <Typography color="#ffffff" fontSize={18}>
            I focus on user experience and scalable architecture. Modern
            software should work flawlessly and feel intuitive.
          </Typography>

          <Stack direction="row" spacing={3} flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
            >
              Download CV
            </Button>

            <Button variant="outlined" size="large">
              Get in touch
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
