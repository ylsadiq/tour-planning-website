import axios from 'axios';
import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://sleepy-ocean-28261.herokuapp.com/services',data)
        // axios.post('https://sleepy-ocean-28261.herokuapp.com/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
         <div>
      <h2 className="mt-5 text-center text-info">Add Services</h2>
      <div className="login-box add-service">
        <div className="event-box border border">
          <div className="login-form ">
          <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddService;