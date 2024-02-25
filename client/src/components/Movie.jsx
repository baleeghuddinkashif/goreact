import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "3 Idiots",
      release_data: "1999-12-31",
      runtime: 180,
      mpaa_rating: "R",
      description: "Some description goes here",
    };
    setMovie(myMovie);
  }, [id]);
  return (
    <div className="text-center">
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {movie.release_data}, {movie.runtime} minutes, Rating:
          {movie.mpaa_rating}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
