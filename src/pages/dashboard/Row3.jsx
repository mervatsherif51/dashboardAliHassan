import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/Piechart/Pie";
import Bar from "../barChart/bar";
import Geo from "../../pages/geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={2} direction={"row"} flexWrap={"wrap"} mt={3}>
      <Paper sx={{flexGrow: 1,minWidth:"300px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <Pie isDashboard={true} />

        <Typography variant="h6" align="center" sx={{mt: "15px"}}>
          $48.152 revenue ganarated
        </Typography>

        <Typography variant="body2" px={0.7} pb={5} align="center">
            Includes extra misc expenditures and costs
        </Typography>


      </Paper>

      <Paper sx={{flexGrow: 1,minWidth:"300px", width: "33%" }}>
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>

        <Bar isDashboard={true} />


      </Paper>

      <Paper sx={{flexGrow: 1, minWidth:"300px", width: "33%" }}>


      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Geography Based Traffic
        </Typography>
      <Geo isDashboard={true}/>

      </Paper>
    </Stack>
  );
};

export default Row3;
