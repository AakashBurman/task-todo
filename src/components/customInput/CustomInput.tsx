import { AiOutlineAlignLeft } from "react-icons/ai";
import "./customInput.scss";
type TCustomInput = {
  onKeyDown?: (e: any) => void;
  inputValue: string | number | undefined;
  setValue: (e: string | number | undefined) => void;
  placeholder?: string;
};
function CustomInput({
  onKeyDown,
  inputValue,
  setValue,
  placeholder = "enter here",
}: TCustomInput) {
  return (
    <div className="custom_input_main_container">
      <>
        <input
          autoFocus={true}
          className="custom_input_container"
          placeholder={placeholder}
          value={inputValue ? inputValue : ""}
          onKeyDown={(e) => onKeyDown && onKeyDown(e)}
          onChange={(e) => setValue(e?.target?.value)}
        />
        <AiOutlineAlignLeft
          style={{
            position: "absolute",
            color: "#a3a3a3",
            fontSize: "20px",
            left: 58,
            top: 16,
          }}
        />
      </>
    </div>
  );
}

export default CustomInput;
