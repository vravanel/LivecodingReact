import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import propTypes from "prop-types";

export default function Form({ addTask }) {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };
  return (
    <FormControl>
      <FormLabel>Ajouter une tâche</FormLabel>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button marginTop="1rem" marginBottom={1} onClick={handleAddTask}>
        Ajouter
      </Button>
    </FormControl>
  );
}

Form.propTypes = {
  addTask: propTypes.func,
};
