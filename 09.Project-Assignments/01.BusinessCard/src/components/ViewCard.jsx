/* eslint-disable react/prop-types */
import { Card } from "./Card";

export function ViewCard({ cards }) {
  return (
    <div>
      <h2>All Cards</h2>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}
