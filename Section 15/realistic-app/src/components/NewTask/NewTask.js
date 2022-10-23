import { useState } from "react";
import { BASE_URL } from "../../config";
import { useRequest } from "../../hooks/requestHook";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { dataRequest, error, isLoading } = useRequest();

  const setData = (taskText, data) => {
    const generatedId = data.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    dataRequest(
      `${BASE_URL}/tasks.json`,
      {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      setData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
