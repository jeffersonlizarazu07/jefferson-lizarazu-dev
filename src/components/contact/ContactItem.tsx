import {type ContactItemProps} from '../types/ContactItem'
import { Stack, Box, Typography } from '@mui/material';

export const ContactItem = ({
  icon,
  title,
  value,
  titleColor = "#64748b",
  valueColor = "#ffffff",
}: ContactItemProps) => {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      sx={{
        p: 2,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: "#1e293b",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography variant="caption" color="#64748b" fontSize="15px">
          {title}
        </Typography>
        <Typography fontWeight={600}>{value}</Typography>
      </Box>
    </Stack>
  );
};
