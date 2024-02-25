import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    let movieList = [
      {
        id: 1,
        title: "3 Idiots",
        release_data: "1999-12-31",
        runtime: 180,
        mpaa_rating: "R",
        description: "Some description goes here",
      },
      {
        id: 2,
        title: "Dhoom 3",
        release_data: "2005-11-25",
        runtime: 212,
        mpaa_rating: "R",
        description: "Some description goes here",
      },
      {
        id: 3,
        title: "Bahubali",
        release_data: "2015-10-18",
        runtime: 300,
        mpaa_rating: "R",
        description: "Some description goes here",
      },
    ];
    setmovies(movieList);
  }, []);
  return (
    <>
      <div className="text-center">
        <h2>Movies</h2>
        <hr />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_data}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
