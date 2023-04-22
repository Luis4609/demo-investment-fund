import ItemList from "@/components/TableComponent";
import React from "react";

function Users() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-semibold text-left">Users List</h1>
      <ItemList url={"/api/users"}></ItemList>
    </div>
  );
}

export default Users;
