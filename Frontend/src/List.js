import { useState } from "react";

import Item from "./Item";

export default function List({
  newItems,
  onDeleteItems,
  onChangeToggele,
  clearList,
}) {
  const [sortBy, setSort] = useState("packed");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = newItems;
  }
  if (sortBy === "description") {
    sortedItems = newItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = newItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onChangeToggele={onChangeToggele}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by User Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packing Status</option>
        </select>

        <button onClick={clearList}>Clear</button>
      </div>
    </div>
  );
}
