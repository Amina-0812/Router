import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import MovieDetailsPage from "./MovieDetailsPage";
import Filter from "./Filter";
import Movies from "./Movies";
import "./App.css";

const App = () => {
  const moviesData = Movies(); // getting the movie's data from Movies component
  const [movies, setMovies] = useState(moviesData); // initialize state for movies
  const [filteredMovies, setFilteredMovies] = useState(moviesData); // initialize state for filtered movies
  const [showForm, setShowForm] = useState(false); // state to toggle form visibility
  const [formData, setFormData] = useState({
    id: movies.length + 1,
    name: "",
    description: "",
    rating: "",
    trailer: "",
    genre: "",
    image: null,
  });

  const handleInputChange = (e) => {
    // handle form input changes
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addMovie = () => {
    // function to add a new movie by the user
    if (
      !formData.name ||
      !formData.description ||
      !formData.rating ||
      !formData.trailer ||
      !formData.genre ||
      !formData.image
    ) {
      alert("Make sure to fill out all fields including the image!!");
      return;
    }

    const newMovie = {
      id: formData.id,
      ...formData,
      imageUrl: URL.createObjectURL(formData.image), // we are assuming that the image is stored locally for now
    };

    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
    setFormData({
      id: movies.length + 1,
      name: "",
      description: "",
      rating: "",
      trailer: "",
      genre: "",
      image: null,
    });
    setShowForm(false);
  };

  const toggleForm = () => {
    if (showForm) {
      setFormData({
        //here's the code that reset the form when we close it
        id: movies.length + 1,
        name: "",
        description: "",
        rating: "",
        trailer: "",
        genre: "",
        image: null,
      });
    }
    setShowForm(!showForm);
  };

  const handleFilterChange = (type, value) => {
    //we define the function to handle filter changes
    let filtered;
    if (type === "title") {
      filtered = movies.filter((movie) => movie.name.includes(value));
    } else if (type === "rating") {
      filtered = movies.filter((movie) => movie.rating === value);
    }
    setFilteredMovies(filtered);
  };

  const formStyles = {
    // styles for the form
    padding: "20px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
  };

  const inputStyles = {
    // styles for each input field
    marginBottom: "10px",
    padding: "10px",
    width: "calc(100% - 22px)",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    // styles for button
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    marginRight: "10px",
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="title">Discover the coolest movies of all time</h1>
        <button onClick={toggleForm}>
          {showForm ? "Close Form" : "Add New Movie"}
        </button>
        {showForm && (
          <div style={formStyles}>
            <input
              style={inputStyles}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              style={inputStyles}
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <input
              style={inputStyles}
              type="text"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleInputChange}
            />
            <input
              style={inputStyles}
              type="text"
              name="trailer"
              placeholder="Trailer URL"
              value={formData.trailer}
              onChange={handleInputChange}
            />
            <input
              style={inputStyles}
              type="text"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleInputChange}
            />
            <input
              style={inputStyles}
              type="file"
              name="image"
              onChange={handleInputChange}
            />{" "}
            {/*this file input is for image upload */}
            <button style={buttonStyle} onClick={addMovie}>
              Submit
            </button>
          </div>
        )}
        <Filter onFilterChange={handleFilterChange} /> {/* filter component */}
        <Routes>
          {/* The next code sets up a route for the root URL ("/") of the app
          the 'exact' ensures the path must match exactly
          the 'path' specifies the URL path ("/")
          the 'element' renders a <div> with movie cards*/}
          <Route
            exact
            path="/"
            element={
              <div className="movie-grid">
                {filteredMovies.map((movie) => (
                  <div className="movie-card" key={movie.id}>
                    <MovieCard movie={movie} />{" "}
                    {/* display the movie card for each movie in the list */}
                  </div>
                ))}
              </div>
            }
          />
          {/*a route made to reveal the descrption of each movie
          the element part specifies that once the route is matched, it will render the MovieDetailsPage component, passing in the moviesData as a prop*/}
          <Route
            path="/movie/:id"
            element={<MovieDetailsPage movies={filteredMovies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
