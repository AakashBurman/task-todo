import { useEffect, useState } from "react";
import CustomModal from "src/components/CustomModal";
import CustomInput from "src/components/customInput/CustomInput";
import TodoListItem from "src/components/todoListItem/TodoListItem";
import "./todoList.scss";
import { useAppDispatch, useAppSelector } from "src/utils/hooks";
import { updateTodoData } from "src/redux/reducers/todoReducer";

function TodoList() {
  const dispatch = useAppDispatch();
  const persistData = useAppSelector((state) => state?.todoReducer?.todoData);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Array<any>>([]);
  const [onEditTaskData, setOnEditTaskData] = useState<any>({});

  const [inputValue, setInputValue] = useState<string | number | undefined>(
    undefined
  );
  console.log(data);
  const handleAddClick = (e: any) => {
    if (e.key === "Enter" && !!inputValue) {
      let arr = data;
      arr?.push({ id: arr?.length, task: inputValue, isMarked: false });
      setInputValue("");
      setData([...arr]);
      // dispatch(updateTodoData([...arr]));
    }
  };
  const handleIsMarkedToggler = (index: any) => {
    let arr = data;
    arr[index].isMarked = !arr[index].isMarked;
    setData([...arr]);
    // dispatch(updateTodoData([...arr]));
  };

  const handleDeleteClick = (index: number) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
    // dispatch(updateTodoData([...arr]));
  };

  const handleSaveClick = () => {
    if (
      onEditTaskData?.task === data[onEditTaskData?.index]?.task ||
      !onEditTaskData?.task
    ) {
      setOpen(false);
    } else {
      let arr = data;
      arr[onEditTaskData?.index].task = onEditTaskData?.task;
      setOpen(false);
      setData([...arr]);
      // dispatch(updateTodoData([...arr]));
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
      {data?.map((item: any, index: number) => {
        return (
          <TodoListItem
            key={index}
            data={item}
            onEditClick={() => {
              // setAnchorEl(null);
              setOpen(true);
              setOnEditTaskData({ ...item, index });
            }}
            onDeleteClick={() => {
              // setAnchorEl(null);
              handleDeleteClick(index);
            }}
            handleToggler={() => handleIsMarkedToggler(index)}
            // anchorEl={anchorEl}
            // setAnchorEl={setAnchorEl}
          />
        );
      })}
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
