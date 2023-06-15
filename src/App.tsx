import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/main/todo_list/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
}

export default App;
