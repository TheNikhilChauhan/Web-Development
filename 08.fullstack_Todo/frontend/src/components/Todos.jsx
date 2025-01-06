export function Todos() {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <div>
        <h2>Gym</h2>
        <p>Go to gym at 8 in the evening</p>
        <button
          style={{
            backgroundColor: "red",
          }}
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
}
