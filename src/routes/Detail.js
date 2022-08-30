import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(detail);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {detail((Mdetail) => (
            <Mdetail
              key={Mdetail.setLoading}
              id={Mdetail.id}
              coverImg={Mdetail.medium_cover_image}
              title={Mdetail.title}
              summary={Mdetail.summary}
              genres={Mdetail.genres}
              des_int={Mdetail.description_intro}
              des_ful={Mdetail.description_full}
              rating={Mdetail.rating}
              runtime={Mdetail.runtime}
              year={Mdetail.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}
// paramas :url의 부모 컴포 변수를 받는 역할,
export default Detail;

// breaking change 버전업데이트 때문에 코드가 깨지는 현상(새로 코드를 짜야함)
