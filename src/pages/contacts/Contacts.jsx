import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box>
      <Header
        title={"CONTACTS"}
        subTitle={"List of Contacts for futue Reference"}
      />
      <Box sx={{ height: 650, width: "99%", mx: "auto", color: "#FFF" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
