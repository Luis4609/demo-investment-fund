import React from "react";
import { Button, Stack, Typography } from "@mui/material";

interface CrudHeaderI {
    title: string;
    buttonName: string;
}

function CrudHeader({ title, buttonName } : CrudHeaderI) {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h3" component="h1">
        {title}
      </Typography>

      <Button variant="contained">{buttonName}</Button>
    </Stack>
  );
}

export default CrudHeader;
