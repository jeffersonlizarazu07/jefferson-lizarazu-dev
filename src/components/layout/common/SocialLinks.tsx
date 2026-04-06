import { Stack, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type SocialLinksProps = {
  showLabels?: boolean;
};

export const SocialLinks = ({ showLabels = true }: SocialLinksProps) => {
  const hrefLinks = {
    github: "https://github.com/jeffersonlizarazu07",
    linkedin: "https://www.linkedin.com/in/jefferson-lizarazu/",
    email: "mailto:jeffersonlizarazu@hotmail.com?cc=jeffersonliza21@gmail.com",
  };

  const socialLinksArray = [
    {
      Icon: GitHubIcon,
      label: "GitHub",
      href: hrefLinks.github,
      ariaLabel: "GitHub",
    },
    {
      Icon: LinkedInIcon,
      label: "LinkedIn",
      href: hrefLinks.linkedin,
      ariaLabel: "LinkedIn",
    },
    {
      Icon: EmailIcon,
      label: "Correo electrónico",
      href: hrefLinks.email,
      ariaLabel: "Email",
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={4}
      color="grey.500"
      sx={{
        "& a:hover": {
          color: { color: (theme) => theme.palette.grey[500] },
          transform: "scale(1.2)",
        },
      }}
    >
      {socialLinksArray.map(({ Icon, label, href, ariaLabel }) => (
        <Link
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
          }}
          underline="none"
          key={label}
          href={href}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
          {showLabels && <Typography>{label}</Typography>}
        </Link>
      ))}
    </Stack>
  );
};
