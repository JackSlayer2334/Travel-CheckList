export default function Stats({ newItems }) {
  if (newItems.length === 0)
    return (
      <footer className="stats">
        <em>Letss Go !! Start Adding the items 😭</em>
      </footer>
    );
  const totalItems = newItems.length;
  const itemPacked = newItems.filter((ele) => ele.packed).length;
  const percentPacked = Math.round((itemPacked / totalItems) * 100);

  return (
    <footer className="stats">
      {itemPacked !== 0 ? (
        percentPacked !== 100 ? (
          <em>
            You have {totalItems} items in the list and {percentPacked}% items
            have been Packed
          </em>
        ) : (
          <em>All Set Ready to GO ✈️</em>
        )
      ) : (
        <em>Start Packing Already!!</em>
      )}
    </footer>
  );
}
