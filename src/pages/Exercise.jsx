// import React from "react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import {
  deleteExerciseActionCreator,
  postExerciseActionCreator,
} from "../actions/action";

import "./Exercise.css";

const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [exerciseFormObject, setExerciseFormObject] = useState({
    exercise: "",
    duration: "",
    calories: "",
  });

  // handling the input and putting it on the state
  const inputExerciseHandler = (e) => {
    const { name, value } = e.target;
    setExerciseFormObject((prev) => ({ ...prev, [name]: value }));
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

  // on form submit
  const exerciseSubmitHandler = (e) => {
    e.preventDefault();
    console.log(exerciseFormObject);
    dispatch(postExerciseActionCreator(exerciseFormObject));
    setExerciseFormObject({
      exercise: "",
      duration: "",
      calories: "",
    });
    closeModal();
  };

  const exerciseDeleteHandler = (exercise) => {
    // console.log(exercise);
    dispatch(deleteExerciseActionCreator(exercise));
  };
  return (
    <div className="exercise_container">
      <div>
        <button onClick={openModal} className="exercise_modal_btn">
          Add Exercise
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Exercise Modal"
          ariaHideApp={false}
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
            <h2>Add Exercise</h2>
            <form onSubmit={exerciseSubmitHandler}>
              <div className="form-group">
                <label htmlFor="exercise">Exercise Name:</label>
                <input
                  type="text"
                  id="exercise"
                  name="exercise"
                  required
                  value={exerciseFormObject.exercise}
                  onChange={inputExerciseHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (in minutes):</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  required
                  value={exerciseFormObject.duration}
                  onChange={inputExerciseHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="calories">calories</label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  required
                  value={exerciseFormObject.calories}
                  onChange={inputExerciseHandler}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
      <div className="exercise_card_container">
        {exercises?.map((exerciseType) => {
          return (
            <div className="exercise_card" key={exerciseType?._id}>
              <div className="heading">
                <h3>Exercise</h3>
                <button onClick={() => exerciseDeleteHandler(exerciseType)}>
                  Delete
                </button>
              </div>
              <div className="exercise_latest_data_container">
                <span>Exercise Name:{exerciseType?.exercise}</span>
                <span>Duration:{exerciseType?.duration}</span>
                <span>Calories Burned:{exerciseType?.calories}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise;
