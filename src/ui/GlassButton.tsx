/**
 * Button component - botón estilizado con efecto glass
 * Usado en: ContactForm, y cualquier página que necesite un botón estilizado
 */
import { Button, ButtonProps } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type GlassButtonProps = {
  /** Texto del botón */
  children?: React.ReactNode;
  /** Variante de MUI Button */
  variant?: ButtonProps["variant"];
} & Omit<ButtonProps, "variant">;

export const GlassButton = ({ 
  children = "Enviar mensaje", 
  variant = "contained",
  ...props 
}: GlassButtonProps) => {
  return (
    <Button
      variant={variant}
      endIcon={<SendIcon />}
      sx={{
        px: 6,
        py: 2,
        borderRadius: 3,
        fontWeight: 600,
        color: "primary.main",
        background: "rgba(43,108,238,0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(43,108,238,0.2)",
        transition: "0.3s",
        "&:hover": {
          bgcolor: "primary.main",
          color: "white",
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};