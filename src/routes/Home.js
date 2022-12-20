import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import styles from "./Home.module.css";

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
    console.log(json.data.movies);
  };
  // fetch 원격 api 호출, async 반드시 promise반환,await 프라미스가 처리때까지 대기
  // promise 비동기 작업으로 전달되는 값의 컨테이너, body.json 프라미스 반환
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.setLoading}
              id={movie.id}
              year={movie.year}
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

// npm i gh-pages 깃허브 업로드 패키지
// build 스크립트 실행->웹사이트의 production ready(코드압축 및 최적화 완료) code생성->npm run build
// package.json에 가서 ,찍고 "homepage":"http://github username.github.io/repository."
// script에서 deploy(설치한 gh-pages 실행): "gh-pages -d build" (directory약자) (build 폴더를 homepage에 업로드)
// predeploy:"npm run build" deploy실행되면 먼저 실행, build->deploy 과정 자동화
// npm run deploy
