import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDec] = useState("");
  const [quantity, setQun] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDec("");
    setQun(1);
  }

  return (
    <div className="add-form">
      <h3>What is Needed?? </h3>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQun(Number(e.target.value))}
        >
          {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {" "}
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => setDec(e.target.value)}
        ></input>
        <button type="btn">Add</button>
      </form>
    </div>
  );
}
