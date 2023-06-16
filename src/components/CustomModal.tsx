import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CustomButton from "./customButton/CustomButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "300px",
  width: "100%",
  bgcolor: "#00000077",
  border: "1px solid grey",
  boxShadow: 24,
  p: 4,
  borderRadius: "7px",
};

type TCustomModal = {
  open: boolean;
  setOpen: (e: boolean) => void;
  handleSaveClick: (e?: any) => void;
  onEditTaskData: any;
  setOnEditTaskData: (e: any) => void;
};
export default function CustomModal({
  open,
  setOpen,
  onEditTaskData,
  handleSaveClick,
  setOnEditTaskData,
}: TCustomModal) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"#fff"}
          >
            Edit Task
          </Typography>

          <textarea
            value={onEditTaskData ? onEditTaskData?.task : ""}
            onChange={(e: any) =>
              setOnEditTaskData((prev: any) => ({
                ...prev,
                task: e.target.value,
              }))
            }
            style={{
              width: "100%",
              minHeight: "23px",
              padding: "5px ",
              marginTop: "10px",
              outline: "none",
              overflow: "hidden",
              maxWidth: "290px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CustomButton
              mode="green"
              title="Save"
              onClick={() => handleSaveClick(onEditTaskData)}
            />
            <CustomButton
              mode="red"
              title="Cancle"
              onClick={() => setOpen(false)}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
