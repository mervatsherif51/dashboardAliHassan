import { Box, Typography, useTheme } from "@mui/material";


const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align={"center"} color={theme.palette.error.main}>
        There is no design yet
        <br />
        <br />
        Please try Again Later...
      </Typography>
    </Box>
  );
};

export default NotFound;


