import React, { useState } from "react";
import SkinDetail from "./components/SkinDetail";

function App() {
  // Our array of skins
  const cs2Skins = [
    {
      id: 1,
      weapon: "AK-47",
      name: "Redline",
      rarity: "Classified",
      condition: "Field-Tested",
      priceUSD: 15.99,
    },
    {
      id: 2,
      weapon: "AWP",
      name: "Dragon Lore",
      rarity: "Covert",
      condition: "Minimal Wear",
      priceUSD: 2000,
    },
    {
      id: 3,
      weapon: "M4A1-S",
      name: "Printstream",
      rarity: "Covert",
      condition: "Factory New",
      priceUSD: 300,
    },
  ];

  // Wishlist state: which skins the user has favorited
  const [wishlist, setWishlist] = useState([]);

  // Add a skin ID to wishlist if not already there
  function handleAddToWishlist(skinId) {
    if (!wishlist.includes(skinId)) {
      setWishlist([...wishlist, skinId]);
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>CS2 Skins</h1>

      {cs2Skins.map((skin) => (
        <SkinDetail
          key={skin.id}
          weapon={skin.weapon}
          name={skin.name}
          rarity={skin.rarity}
          condition={skin.condition}
          priceUSD={skin.priceUSD}
          onAddToWishlist={() => handleAddToWishlist(skin.id)}
        />
      ))}

      <h2>My Wishlist</h2>
      {wishlist.length === 0 && <p>No items in wishlist yet.</p>}
      <ul>
        {wishlist.map((id) => {
          const foundSkin = cs2Skins.find((s) => s.id === id);
          return (
            <li key={id}>
              {foundSkin.weapon} | {foundSkin.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
