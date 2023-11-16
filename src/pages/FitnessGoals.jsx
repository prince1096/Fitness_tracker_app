import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import {
  deleteGoalActionCreator,
  postGoalActionCreator,
} from "../actions/action";

import "./FitnessGoals.css";

const FitnessGoals = () => {
  const dispatch = useDispatch();
  const goal = useSelector((state) => state.goal);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [goalFormObject, setGoalFormObject] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: "",
    status: "In Progress",
  });

  const inputGoalHandler = (e) => {
    const { name, value } = e.target;
    setGoalFormObject((prev) => ({ ...prev, [name]: value }));
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
  // date formater
  const helperDateFormateConverter = (inputDate) => {
    if (!inputDate) {
      return "";
    }
    const date = new Date(inputDate);

    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );

    return `${day} ${month.toUpperCase()}`;
  };

  const goalSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postGoalActionCreator(goalFormObject));
    setGoalFormObject({
      name: "",
      description: "",
      targetDate: "",
      targetCalories: "",
      status: "In Progress",
    });
    closeModal();
  };

  const deleteGoalHandler = (goal) => {
    dispatch(deleteGoalActionCreator(goal));
  };
  return (
    <div className="goal_container">
      <div>
        <button onClick={openModal} className="goal_modal_btn">
          Add Goal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Goal Modal"
          ariaHideApp={false}
        >
          <AiOutlineClose
            size={32}
            className="close_icon"
            onClick={closeModal}
          />
          <div className="container" style={{ backgroundColor: "#242424" }}>
            <h2>Add Goal</h2>
            <form onSubmit={goalSubmitHandler}>
              <div className="form-group">
                <label htmlFor="name">Goal Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={goalFormObject.name}
                  onChange={inputGoalHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Goal Description:</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={goalFormObject.description}
                  onChange={inputGoalHandler}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="targetDate">Target Date:</label>
                <input
                  type="date"
                  id="targetDate"
                  name="targetDate"
                  required
                  value={goalFormObject.targetDate}
                  onChange={inputGoalHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="targetCalories">Target Calories:</label>
                <input
                  type="number"
                  id="targetCalories"
                  name="targetCalories"
                  required
                  value={goalFormObject.targetCalories}
                  onChange={inputGoalHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  required
                  value={goalFormObject.status}
                  onChange={inputGoalHandler}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Achieved">Achieved</option>
                  <option value="Abandoned">Abandoned</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
      <div className="goal_card_container">
        {goal?.map((goal) => {
          return (
            <div className="goal_card" key={goal?._id}>
              <div className="heading">
                <h3>Goal</h3>
                <button onClick={() => deleteGoalHandler(goal)}>Delete</button>
              </div>
              <div className="goal_latest_data_container">
                <span>Goal Name:{goal?.name}</span>
                <span>
                  Target Date:
                  {helperDateFormateConverter(goal?.targetDate)}
                </span>
                <span>Target Calories:{goal?.targetCalories}</span>
                <span>Status:{goal?.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessGoals;
