import { useTheme } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <div>
      <Header title={"Bar Chart"} subTitle={"the minimum wage in Germany, France and Spain (EUR/month)"} />
      <Bar />
    </div>
  );
};

export default BarChart;
