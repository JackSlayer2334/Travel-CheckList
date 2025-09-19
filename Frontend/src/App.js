import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";

import Stats from "./Stats";
import List from "./List";
export default function App() {
  const [newItems, setNewI] = useState([]);

  function handleAddItem(items) {
    setNewI((newIt) => [...newIt, items]);
  }
  function handleDeleteItem(id) {
    setNewI((newIt) => newIt.filter((ele) => ele.id !== id));
  }
  function handleOnToggle(id) {
    setNewI((thelist) =>
      thelist.map((ele) =>
        ele.id === id ? { ...ele, packed: !ele.packed } : ele
      )
    );
  }
  function handelClear() {
    const confirmation = window.confirm(
      "Are you sure you want to clear all the list?"
    );
    if (confirmation) setNewI([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <List
        newItems={newItems}
        onDeleteItems={handleDeleteItem}
        onChangeToggele={handleOnToggle}
        clearList={handelClear}
      />
      <Stats newItems={newItems} />
    </div>
  );
}
