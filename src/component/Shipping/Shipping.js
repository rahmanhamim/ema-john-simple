import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const { user } = useAuth();

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <div>
   <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
    <input
     className="shipping-input"
     defaultValue={user.displayName}
     {...register("name")}
    />

    <input
     defaultValue={user.email}
     className="shipping-input"
     {...register("email", { required: true })}
    />

    {errors.email && <span className="error">This field is required</span>}
    <input
     placeholder="address"
     className="shipping-input"
     defaultValue="Address"
     {...register("address")}
    />
    <input
     placeholder="city name"
     className="shipping-input"
     defaultValue="City"
     {...register("City")}
    />
    <input
     placeholder="your phone #"
     className="shipping-input"
     defaultValue="Phone"
     {...register("phone")}
    />

    <input className="shipping-input" type="submit" />
   </form>
  </div>
 );
};

export default Shipping;
