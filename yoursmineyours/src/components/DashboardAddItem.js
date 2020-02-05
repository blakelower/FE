import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import '../styles/DashboardAddItem.css';

function DashboardAddItem() {
  return (
    <Form>
      <h2>Rent your products. Earn money.</h2>
      Name:
      <Field type="text" placeholder="Name" name="name" /><br></br>
      
      Category:
      <Field name="category" as="select" placeholder="Category">
        <option value="camera">Camera</option>
        <option value="lighting">Lighting</option>
        <option value="lens">Lens</option>
        <option value="soundRecordingEquipment">
          Sound Recording Equipment
        </option>
        <option value="other">Other</option>
      </Field><br></br>

      Cost(Per day):
      <Field type="number" placeholder="Price" name="cost"/><br></br>
      Description:
      <Field type="text" placeholder="description" name="description"/><br></br>
      <button>Add Item</button>
    </Form>
  );
}

const AddItem = withFormik({
  mapPropsToValues({ name, cost, category, description }) {
    return {
      name: name || "",
      cost: cost || "",
      category: category || "",
      description: description || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
    axios.post("https://use-my-tech-stuff-eu.herokuapp.com/api/equipments", values)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(DashboardAddItem);

export default AddItem;
