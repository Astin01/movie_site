import propTypes from "prop-types";
import { Link } from "react-router-dom";

// prop은 객체
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      {/* 경고이유 img 요소는 alt속성을 가져야한다 */}
      <h2>
        <Link to="./movie">{title}</Link>
      </h2>
      {/* link 를 사용하면 reload 방지 */}
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
// movie 컴포가 prop요소들({}안)을 부모컴포로부터 받아온다

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;

// react router 페이지 전환, router 별로 생각 필요
