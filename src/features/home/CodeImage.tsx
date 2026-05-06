import { Box, Typography, Paper } from "@mui/material";

// Colores para syntax highlighting
const COLORS = {
  sym: "#89ddff",   // símbolos ({ , : })
  key: "#82aaff",   // propiedades (mode, primary)
  val: "#c3e88d",   // valores ('dark', '#2196f3')
  kw: "#c792ea",    // keywords (export, createTheme)
  kw2: "#ffcb6b",  // keyword especial (theme)
};

export const CodeImage = () => {
  return (
    <Box sx={{ position: "relative", display: { xs: "none", lg: "block" } }}>
      <Paper elevation={1} sx={{
        width: "34.375rem", p: 3, borderRadius: 2,
        bgcolor: "#242527",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "transform 0.5s",
        "&:hover": { transform: "scale(1.02)" },
      }}>
        {/* Cabecera estilo Mac */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
          <Typography variant="caption" sx={{ ml: 2, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>
            ThemeConfig.ts
          </Typography>
        </Box>

        {/* Código */}
        <Box component="pre" sx={{
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.85rem", lineHeight: 1.7,
          color: "#a6accd", margin: 0,
        }}>
          <span style={{ color: COLORS.kw }}>export const</span>{" "}
          <span style={{ color: COLORS.kw2 }}>theme</span> ={" "}
          <span style={{ color: COLORS.kw }}>createTheme</span><span style={{ color: COLORS.sym }}>{"({"}</span>{"\n  "}
          <span style={{ color: COLORS.key }}>palette</span><span style={{ color: COLORS.sym }}>:{"{"}</span>{"\n    "}
          <span style={{ color: COLORS.key }}>mode</span><span style={{ color: COLORS.sym }}>:</span>{" "}
          <span style={{ color: COLORS.val }}>'dark'</span><span style={{ color: COLORS.sym }}>,</span>{"\n    "}
          <span style={{ color: COLORS.key }}>primary</span><span style={{ color: COLORS.sym }}>:{"{"}</span>{"\n      "}
          <span style={{ color: COLORS.key }}>main</span><span style={{ color: COLORS.sym }}>:</span>{" "}
          <span style={{ color: COLORS.val }}>'#2196f3'</span><span style={{ color: COLORS.sym }}>,</span>{"\n      "}
          <span style={{ color: COLORS.key }}>background</span><span style={{ color: COLORS.sym }}>:{"{"}</span>{"\n      "}
          <span style={{ color: COLORS.key }}>default</span><span style={{ color: COLORS.sym }}>:</span>{" "}
          <span style={{ color: COLORS.val }}>'#121212'</span><span style={{ color: COLORS.sym }}>{"}"}</span>{"\n    "}
          <span style={{ color: COLORS.sym }}>{"},"}</span>{"\n    "}
          <span style={{ color: COLORS.key }}>typography</span><span style={{ color: COLORS.sym }}>:{"{"}</span>{"\n      "}
          <span style={{ color: COLORS.key }}>fontFamily</span><span style={{ color: COLORS.sym }}>:</span>{" "}
          <span style={{ color: COLORS.val }}>'Roboto'</span><span style={{ color: COLORS.sym }}>{"}"}</span>{"\n"}
          <span style={{ color: COLORS.sym }}>{"});"}</span>
        </Box>
      </Paper>
    </Box>
  );
};
