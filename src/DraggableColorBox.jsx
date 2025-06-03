import { styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import sizes from "./styles/sizes";

const Root = styled("div")(() => ({
  width: "20%",
  height: "25%",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-4.5px",
  [sizes.down("lg")]:{
    width: "25%",
    height: "20%"
  },
  [sizes.down("md")]:{
    width: "50%",
    height: "10%"
  },
  [sizes.down("sm")]:{
    width: "100%",
    height: "5%"
  }


}));

const BoxContent = styled("div")(() => ({
  position: "absolute",
  padding: "10px",
  width: "100%",
  bottom: "0px",
  left: "0px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  color: "rgba(0,0,0,0.5)",
  "& .icon": {
    color: "black",
    transition: "transform 0.3s ease",
  },
  "& .icon:hover": {
    transform: "scale(1.5)",
    color: "white",
  },
}));

export default function DraggableColorBox({ color, name, handleDelete, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
  };

  return (
    <Root ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <BoxContent>
        <span>{name}</span>

    <DeleteIcon
      className="icon"
      onPointerDown={e => e.stopPropagation()}
      onClick={() => handleDelete(name)}
    />
      </BoxContent>
    </Root>
  );
} 
