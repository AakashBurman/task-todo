import { Menu } from "@mui/material";
import "./todoListItem.scss";
import { RxDotsHorizontal } from "react-icons/rx";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
type TTodoListItem = {
  data: any;
  onEditClick: () => void;
  onDeleteClick: () => void;
  handleToggler: () => void;
  // setAnchorEl: (e: any) => void;
  // anchorEl: any;
};
function TodoListItem({
  data,
  onEditClick,
  onDeleteClick,
  handleToggler,
}: // setAnchorEl,
// anchorEl,
TTodoListItem) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    // !!id?.toString() && onEditClick(id);
    setAnchorEl(null);
  };
  return (
    <div className="todo_list_item_main_container">
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: " 20px" }}
      >
        <input
          type="checkbox"
          checked={!!data?.isMarked ? data?.isMarked : undefined}
          className="todo_list_item_input"
          style={{ backgroundColor: "red" }}
          onClick={handleToggler}
        />
        <div
          style={{
            color: "#fff",
            textTransform: "capitalize",
            textDecorationLine: data?.isMarked ? "line-through" : "none",
            paddingLeft: "4px",
            flex: 1,
          }}
        >
          {data?.task}
        </div>
      </div>
      <div style={{ paddingRight: " 20px" }}>
        <RxDotsHorizontal
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            style: {
              background: "#464e59",
              border: "1px solid #464e59",
              padding: 0,
            },
          }}
        >
          <MenuItem
            onClick={() => {
              onEditClick();
              handleMenuClose();
            }}
            style={{ color: "#fff" }}
          >
            <HiPencilAlt style={{ paddingRight: "5px" }} />
            <div style={{ fontWeight: "bold", marginTop: "2px" }}>Edit</div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              onDeleteClick();
              handleMenuClose();
            }}
            style={{
              alignItems: "center",
              display: "flex",
              color: "red",
            }}
          >
            <FaTrashAlt
              style={{
                paddingRight: "5px",
                fontSize: "15px",
                marginBottom: "2px",
              }}
            />
            <div style={{ fontWeight: "bold", marginTop: "2px" }}>Delete</div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default TodoListItem;
