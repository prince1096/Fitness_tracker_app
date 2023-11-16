import "./Food.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import {
  deleteFoodActionCreator,
  postFoodActionCreator,
} from "../actions/action";

const Food = () => {
  const foods = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formObject, setFormObject] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormObject((pre) => ({ ...pre, [name]: value }));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#242424",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleFoodSubmit = (e) => {
    e.preventDefault();
    dispatch(postFoodActionCreator(formObject));
    setFormObject({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    });
    closeModal();
  };

  const deleteFoodHandler = (food) => {
    dispatch(deleteFoodActionCreator(food));
  };
  return (
    <div className="food_container">
      <div>
        <button onClick={openModal} className="food_modal_btn">
          Add Food
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Food Modal"
          ariaHideApp={false}
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
            <h2>Add Food</h2>
            <form onSubmit={handleFoodSubmit}>
              <div className="form-group">
                <label htmlFor="name">Food Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={inputHandler}
                  value={formObject.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="calories">Calories:</label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  required
                  onChange={inputHandler}
                  value={formObject.calories}
                />
              </div>
              <div className="form-group">
                <label htmlFor="protein">Protein (grams):</label>
                <input
                  type="number"
                  id="protein"
                  name="protein"
                  required
                  onChange={inputHandler}
                  value={formObject.protein}
                />
              </div>
              <div className="form-group">
                <label htmlFor="carbohydrates">Carbohydrates (grams):</label>
                <input
                  type="number"
                  id="carbohydrates"
                  name="carbohydrates"
                  required
                  onChange={inputHandler}
                  value={formObject.carbohydrates}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fat">Fat (grams):</label>
                <input
                  type="number"
                  id="fat"
                  name="fat"
                  required
                  onChange={inputHandler}
                  value={formObject.fat}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
      <div className="food_card_container">
        {foods?.map((food) => {
          return (
            <div className="food_card" key={food?._id}>
              <div className="heading">
                <h3>Food</h3>
                <button onClick={() => deleteFoodHandler(food)}>Delete</button>
              </div>
              <div className="food_latest_data_container">
                <span>Food Name:{food?.name}</span>
                <span>Calories:{food?.calories}</span>
                <span>Protein:{food?.protein}</span>
                <span>Carbohydrates:{food?.carbohydrates}</span>
                <span>Fat:{food?.fat}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
