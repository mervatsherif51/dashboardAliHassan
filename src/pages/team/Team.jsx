import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  //field ==>>> Required
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (<AdminPanelSettingsIcon fontSize="small" sx={{ color: "#FFF" }}/>)}
            {access === "Manager" && (<LockOpenOutlinedIcon fontSize="small" sx={{ color: "#FFF" }} />)}
            {access === "User" && (<SecurityOutlinedIcon fontSize="small" sx={{ color: "#FFF" }}/>)}
            <Typography sx={{ fontSize: "13px", color: "#FFF" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
  
      <Box sx={{ height: 600, width: "98%", mx: "auto"}}>
      
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  
  );
};

export default Team;
