import { useState } from "react";
import CustomModal from "src/components/CustomModal";
import CustomInput from "src/components/customInput/CustomInput";
import TodoListItem from "src/components/todoListItem/TodoListItem";
import {
  addTodoData,
  deleteTodoData,
  editTodoData,
  updateTodoIsMarked,
} from "src/redux/reducers/todoReducer";
import { useAppDispatch, useAppSelector } from "src/utils/hooks";
import "./todoList.scss";

function TodoList() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state?.todoReducer?.todoData);
  const [open, setOpen] = useState<boolean>(false);
  const [onEditTaskData, setOnEditTaskData] = useState<any>({});
  const [inputValue, setInputValue] = useState<string | number | undefined>(
    undefined
  );

  const handleAddClick = (e: any) => {
    if (e.key === "Enter" && !!inputValue?.toString()?.trim()) {
      setInputValue("");
      dispatch(
        addTodoData({
          id: data?.length,
          task: inputValue?.toString()?.trim(),
          isMarked: false,
        })
      );
    }
  };

  const handleSaveClick = () => {
    if (
      onEditTaskData?.task === data[onEditTaskData?.index]?.task ||
      !onEditTaskData?.task?.toString()?.trim()
    ) {
      setOpen(false);
    } else {
      setOpen(false);
      dispatch(editTodoData(onEditTaskData));
    }
  };

  return (
    <div className="todo_list_main_container">
      <div className="todo_heading">Just do it.</div>
      <CustomInput
        handleAdd={handleAddClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="todo_list_container">
        {data?.map((item: any, index: number) => {
          return (
            <TodoListItem
              key={index}
              data={item}
              onEditClick={() => {
                setOpen(true);
                setOnEditTaskData({ ...item, index });
              }}
              onDeleteClick={() => {
                dispatch(deleteTodoData(index));
              }}
              handleToggler={() => dispatch(updateTodoIsMarked(index))}
            />
          );
        })}
      </div>
      <CustomModal
        open={open}
        setOpen={setOpen}
        onEditTaskData={onEditTaskData}
        setOnEditTaskData={setOnEditTaskData}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
}

export default TodoList;
