import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  id,
  coverImg,
  title,
  summary,
  genres,
  des_int,
  des_ful,
  rating,
  runtime,
  year,
}) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>

      <h2>
        <Link to={`./movie/${id}`}>{title}</Link>
      </h2>

      <p>{`${summary}`}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>{des_int}</p>
      <p>{des_ful}</p>
      <P>rating </P>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
