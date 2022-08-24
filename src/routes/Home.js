import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // fetch 원격 api 호출, async 반드시 promise반환,await 프라미스가 처리때까지 대기
  // promise 비동기 작업으로 전달되는 값의 컨테이너, body.json 프라미스 반환
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.setLoading}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
          {/* map안에서 컴포 랜더시에 key 사용 잊지말것 */}
        </div>
      )}
    </div>
  );
}

export default Home;
