import React, { useState } from "react";
import "./Cmty.css";

const Cmty = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      name: "Vilay",
      location: "Rampur",
      question: "How to control leaf miners?",
      category: "Pest",
      replies: 5,
      time: "2 days ago",
    },
    {
      id: 2,
      name: "Anika",
      location: "Dhani",
      question: "What is a good fertilizer for tomatoes?",
      category: "Soil",
      replies: 12,
      time: "5 days ago",
    },
    {
      id: 3,
      name: "Raj",
      location: "Nelamangala",
      question: "What is the price of onions now?",
      category: "Price",
      replies: 3,
      time: "1 day ago",
    },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      (filter === "All" || post.category === filter) &&
      post.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="forum">
      <h2>Community Forum</h2>

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="filters">
        {["All", "Pest", "Soil", "Price"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.avatar} alt={post.name} className="avatar" />
            <div className="content">
              <h4>
                {post.name}, <span className="location">{post.location}</span>
              </h4>
              <p>{post.question}</p>
              <div className="post-meta">
                <span
                  className={`tag ${
                    post.category ? post.category.toLowerCase() : ""
                  }`}
                >
                  {post.category}
                </span>
                <span>{post.replies} replies</span>
                <span>{post.time}</span>
              </div>
            </div>
            {post.image && <img src={post.image} alt="crop" className="thumb" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cmty;