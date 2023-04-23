import { Button, Stack } from "@mui/material";

import Link from "next/link";

interface ButtonHelper {
    url: string
}

const ButtonsStack = ({ url }: ButtonHelper) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Link href={url}>
        <Button variant="outlined" color="success">
          Ver
        </Button>
      </Link>

      <Button variant="outlined">Editar</Button>
      <Button variant="outlined" color="error">
        Borrar
      </Button>
    </Stack>
  );
};

export default ButtonsStack;
