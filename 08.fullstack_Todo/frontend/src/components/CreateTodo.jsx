export function CreateTodo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "20px",
      }}
    >
      <input
        style={{
          fontSize: "large",
          padding: "12px",
        }}
        type="text"
        placeholder="title"
      />
      <input
        style={{
          fontSize: "large",
          padding: "12px",
        }}
        type="text"
        placeholder="description"
      />

      <button>Add a Todo</button>
    </div>
  );
}
