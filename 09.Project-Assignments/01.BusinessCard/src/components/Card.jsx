/* eslint-disable react/prop-types */
export function Card({ card }) {
  const { name, description, options } = card;

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "25px",
      }}
    >
      <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>{name}</h3>
      <p>{description}</p>
      <p style={{ fontSize: "large", fontWeight: "bold" }}>Interest</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          marginBottom: "25px",
        }}
      >
        {options.map((op, index) => {
          return (
            <li
              style={{
                listStyle: "square",
              }}
              key={index}
            >
              {op}
            </li>
          );
        })}
      </ul>
      <button style={{ marginRight: "25px" }}>LinkedIn</button>
      <button style={{ marginRight: "25px" }}>Twitter</button>
      <button style={{ marginRight: "25px" }}>Instagram</button>
    </div>
  );
}
