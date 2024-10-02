import { Movies } from "./Movies";

export function MoviesList({ movies, onSelectMovie, onAddWatch }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movies
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
          onAddWatch={onAddWatch}
        />
      ))}
    </ul>
  );
}
