/* eslint-disable react/prop-types */
export function Todos({ todos }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button
              style={{
                backgroundColor: "red",
              }}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
