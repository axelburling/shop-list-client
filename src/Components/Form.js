import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Form = ({ item, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const Submithandler = handleSubmit((data) => {
    onSubmit(data);
    history.push("/");
  });

  return (
    <form onSubmit={Submithandler}>
      <div className="form-group">
        <label htmlFor="name">Item:</label>
        <input
          type="text"
          className="form-control"
          ref={register}
          name="name"
          id="name"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Spara
        </button>
      </div>
    </form>
  );
};

export default Form;
