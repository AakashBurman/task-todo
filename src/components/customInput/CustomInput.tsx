import { AiOutlineAlignLeft } from "react-icons/ai";
import "./customInput.scss";
type TCustomInput = {
  handleAdd: (e: any) => void;
  inputValue: string | number | undefined;
  setInputValue: (e: string | number | undefined) => void;
};
function CustomInput({ handleAdd, inputValue, setInputValue }: TCustomInput) {
  return (
    <div className="custom_input_main_container">
      <>
        <input
          autoFocus={true}
          className="custom_input_container"
          placeholder="Add a task"
          value={inputValue ? inputValue : ""}
          onKeyDown={(e) => handleAdd(e)}
          onChange={(e) => setInputValue(e?.target?.value)}
        />
        <AiOutlineAlignLeft
          style={{
            position: "absolute",
            color: "#a3a3a3",
            fontSize: "20px",
            left: 28,
            top: 16,
          }}
        />
      </>
    </div>
  );
}

export default CustomInput;
