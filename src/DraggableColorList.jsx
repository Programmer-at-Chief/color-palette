import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableColorBox from "./DraggableColorBox";

export default function DraggableColorList({ colorList, deleteColor, setColorList }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = colorList.findIndex((c) => c.name === active.id);
      const newIndex = colorList.findIndex((c) => c.name === over?.id);
      setColorList(arrayMove(colorList, oldIndex, newIndex));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={colorList.map((c) => c.name)} strategy={rectSortingStrategy}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {colorList.map((color) => (
            <DraggableColorBox
              key={color.name}
              id={color.name}
              color={color.color}
              name={color.name}
              handleDelete={deleteColor}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

