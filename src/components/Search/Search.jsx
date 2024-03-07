import React, { useState } from "react";
import { globalAPI } from "./globalAPI";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await globalAPI.searchByName(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value.trim()) {
      e.target.setCustomValidity("You need to input the GPU name!"); // Set custom required text
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <form className="formbanh" onSubmit={handleSubmit}>
      <div data-aos="fade-down" data-aos-duration="500" className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange} // Mengubah prop onChange
          required
        />
        <button type="submit">
          <span className="icon-search"></span>
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="awikwok123">
          {searchResults.map((result) => (
            <div className="whole1">
              <div className="card" id="pagecard">
                <img className="img" src={result.image} alt={result.nama} />
              </div>
              <section className="section">
                <Link className="kard" to={`/${result.source}/${result.id}`}>
                  <h3 className="strong">
                    <strong>{result.nama}</strong>
                  </h3>
                  <p>Core Clock Speed: {result.bf}</p>
                  <p>Vram: {result.vr}</p>
                  <p>Bus Width: {result.bw}</p>
                </Link>
              </section>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default Search;
