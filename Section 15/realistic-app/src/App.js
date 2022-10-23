import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { BASE_URL } from "./config";
import { useRequest } from "./hooks/requestHook";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, dataRequest } = useRequest();

  useEffect(() => {
    const captureData = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    dataRequest(`${BASE_URL}/tasks.json`, {}, captureData);
  }, [dataRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={dataRequest}
      />
    </React.Fragment>
  );
}

export default App;
