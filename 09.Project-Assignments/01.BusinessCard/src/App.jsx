import "./App.css";
import { Navbar } from "./components/Navbar";
import { CreateCard } from "./components/CreateCard";
import { useState } from "react";
import { ViewCard } from "./components/ViewCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (cardData) => {
    setCards((prevCards) => [...prevCards, cardData]);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/createCard"
              element={<CreateCard addCard={addCard} />}
            />
            <Route path="/viewCard" element={<ViewCard cards={cards} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
