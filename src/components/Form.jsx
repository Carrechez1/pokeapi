import React from "react";
import "../css/form.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
const defaultValue = {
  name: " ",
};
const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    const imputValue = data.name.trim();
    if (imputValue.length !== 0) {
      dispatch(setNameTrainer(imputValue));
      navigate("/pokedex");
    }
    reset(defaultValue);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <input
        className="form__input"
        {...register("name")}
        id="name"
        type="text"
      />
      <button className="form__but">
        <strong>Get into</strong>
      </button>
    </form>
  );
};

export default Form;
