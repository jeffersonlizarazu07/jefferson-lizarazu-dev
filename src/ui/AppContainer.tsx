/**
 * Container - Wrapper para contenido con spacing estándar
 * Usado en: ProjectsPage, ContactPage, AboutPage
 */
import { Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
} & Omit<ContainerProps, "children">;

export const AppContainer = ({ 
  children, 
  maxWidth = "xl",
  sx,
  ...props 
}: AppContainerProps) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};