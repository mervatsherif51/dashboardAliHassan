import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from "../../components/Header";
// @ts-ignore
import { rows, columns } from './data';

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto", color: "#FFF"}}>
     <Header title={"INVOICES"} subTitle={"List of Invoices Balances"} />
    
    
    <DataGrid
    checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
  
      rows={rows}
      
  
      // @ts-ignore
      columns={columns}
    />
    </Box>
  );
}

export default Invoices;
