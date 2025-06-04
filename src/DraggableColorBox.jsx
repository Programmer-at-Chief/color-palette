import DeleteIcon from "@mui/icons-material/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import chroma from "chroma-js";

import {
  Root,
  BoxContent
} from './styles/DraggableColorBoxStyles.js'

export default function DraggableColorBox({ color, name, handleDelete, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
  };

  const luminance = chroma(color).luminance();
  const isLight = luminance >= 0.6;

  return (
    <Root ref={setNodeRef} style={style} {...attributes} {...listeners} >
      <BoxContent isLight = {isLight}>
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
