import React from "react";
import Form from "./Form";
import { createItem } from "../api/api";
import { useHistory } from "react-router-dom";

const CreateItem = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createItem(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreateItem;
