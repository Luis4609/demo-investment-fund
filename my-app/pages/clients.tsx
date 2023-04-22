import ItemList from "@/components/TableComponent";
import TableTailwind from "@/components/TableTailwind";
import { useState } from "react";

type Item = {
  name: string;
  description: string;
};

const ClientsPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const item: Item = { name, description };
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      // handle successful creation
      console.log("Item created successfully!");
    } else {
      // handle error
      console.error("Failed to create item.");
    }
  };

  return (
    <>
    <h1 className="text-5xl font-semibold ">Clients List</h1>
      <form onSubmit={handleSubmit} className="py-4 flex">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>

      <TableTailwind></TableTailwind>

      <ItemList url={"/api/clients"}></ItemList>
    </>
  );
};

export default ClientsPage;
