export default function Item({ item, onDeleteItems, onChangeToggele }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onChangeToggele(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button type="btn" onClick={() => onDeleteItems(item.id)}>
        ❌
      </button>
    </li>
  );
}
