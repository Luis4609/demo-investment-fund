import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Container } from "@mui/material";

import CrudHeader from "../../../components/CrudHeader";
import CustomAppBar from "../../../components/CustomAppBar";

function ClientsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [client, SetClient] = useState();

  useEffect(() => {
    fetch(`/api/clients/${id}`)
      .then((response) => response.json())
      .then((json) => SetClient(json));
  }, [id]);

  return (
    <>
      <Container>
        <CustomAppBar></CustomAppBar>
        <CrudHeader title="Client " buttonName="Añadir"></CrudHeader>
        {id}
      </Container>
    </>
  );
}

export default ClientsPage;
