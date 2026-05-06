/**
 * Card component - tarjeta base estilizada
 * Usado en: ProjectsList, y cualquier página que necesite cards
 */
import { Card, CardProps } from "@mui/material";
import { ReactNode } from "react";

type CardWrapperProps = {
  children: ReactNode;
} & Omit<CardProps, "children">;

export const CardWrapper = ({ children, sx, ...props }: CardWrapperProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        bgcolor: "#1A2233",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};