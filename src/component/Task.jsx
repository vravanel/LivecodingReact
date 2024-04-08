import { Checkbox, Button } from "@chakra-ui/react";
import propTypes from "prop-types";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Task({ title, deleteTask }) {
  const handleDeleteTask = () => {
    deleteTask(title);
  };
  return (
    <>
      <Checkbox marginTop="2rem">{title}</Checkbox>
      <Button backgroundColor="white" width="10%" onClick={handleDeleteTask}>
        <DeleteIcon />
      </Button>
    </>
  );
}

Task.propTypes = {
  title: propTypes.string.isRequired,
  deleteTask: propTypes.func,
};
