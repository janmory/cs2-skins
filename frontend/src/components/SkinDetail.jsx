import React, { useState } from "react";

function SkinDetail({ weapon, name, rarity, condition, priceUSD, onAddToWishlist }) {
  // Local comment state for each SkinDetail component
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleSubmitComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment("");
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>
        {weapon} | {name}
      </h2>
      <p>
        <strong>Rarity:</strong> {rarity}
      </p>
      <p>
        <strong>Condition:</strong> {condition}
      </p>
      <p>
        <strong>Price:</strong> ${priceUSD}
      </p>

      {/* Button to add to wishlist */}
      <button onClick={onAddToWishlist} style={{ marginBottom: "1rem" }}>
        Add to Wishlist
      </button>

      {/* Comments section */}
      <h3>Comments</h3>
      {comments.length === 0 && <p>No comments yet.</p>}
      <ul>
        {comments.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmitComment}>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SkinDetail;
