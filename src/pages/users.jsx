import React, { useEffect, useState } from "react";

import {
  Button,
  Container,
  Stack,
  TableContainer,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ButtonsStack from "../../components/ActionsButtons";
import CrudHeader from "../../components/CrudHeader";
import CustomAppBar from "../../components/CustomAppBar";

function UsersPage() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [users]);

  return (
    <Container>
      <CustomAppBar></CustomAppBar>
      <CrudHeader title="Users List" buttonName="Añadir"></CrudHeader>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="user">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">
                  <ButtonsStack url={`/clients/${user.id}`}></ButtonsStack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default UsersPage;
