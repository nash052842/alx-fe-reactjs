import React, { useState, useEffect } from "react";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Recipe grid code */}
    </div>
  );
}

function App() {
  return <HomePage />;
}

export default App;
