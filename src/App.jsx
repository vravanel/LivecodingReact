import { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Task from "./component/Task";
import { Flex } from "@chakra-ui/react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchTask();
  }, []);

  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.title !== taskName));
  };

  const handleNewTask = (taskName) => {
    setTasks([...tasks, { title: taskName }]);
  };

  return (
    <>
      <Flex flexDirection="column" width="50%">
        <Form addTask={handleNewTask} />
        {tasks.map((task, index) => (
          <Task key={index} title={task.title} deleteTask={deleteTask} />
        ))}
      </Flex>
    </>
  );
}

export default App;
