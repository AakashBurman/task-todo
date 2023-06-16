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
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./todoList.scss";

function TodoList() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state?.todoReducer?.todoData);
  // const [data, setData] = useState(persistData);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | number | undefined>(
    ""
  );
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

  const handleSearch = () => {
    // setIsSearch((prev) => !prev);
  };

  return (
    <div className="todo_list_main_container">
      <div className="todo_heading">Just do it.</div>
      <div
        style={{
          display: "flex",
          width: "500px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSearch ? (
          <CustomInput
            onKeyDown={handleSearch}
            inputValue={searchValue}
            setValue={setSearchValue}
            placeholder="Search a task"
          />
        ) : (
          <CustomInput
            onKeyDown={handleAddClick}
            inputValue={inputValue}
            setValue={setInputValue}
            placeholder="Add a task"
          />
        )}
        {/* <button
          style={{
            position: "absolute",
            right: 0,
            width: "50px",
            height: "52px",
            top: 0,
          }}
          onClick={handleSearch}
        >
          S
        </button> */}
        {isSearch ? (
          <IoIosAddCircleOutline
            onClick={() => setIsSearch(false)}
            style={{
              color: "#fff",
              position: "absolute",
              right: 0,
              width: "50px",
              height: "50px",
              top: 0,
            }}
          />
        ) : (
          <HiMagnifyingGlass
            onClick={() => setIsSearch(true)}
            style={{
              color: "#fff",
              position: "absolute",
              right: 0,
              width: "50px",
              height: "50px",
              top: 0,
            }}
          />
        )}
      </div>
      <div className="todo_list_container">
        {data
          ?.filter((el: any) => el?.task?.includes(searchValue))
          ?.map((item: any, index: number) => {
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
