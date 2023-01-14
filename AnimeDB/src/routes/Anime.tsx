import useGet from "../hooks/useGet";
import { useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import CardSynopsis from "../components/CardSynopsis";
import Ratio from "react-bootstrap/Ratio";

const Anime = () => {
  const page: string = "anime";
  const infos = ["Year", "Episodes", "Duration"];
  const { id } = useParams();
  const { infoAnime, loading } = useGet(page, id);

  return (
    <div className="info">
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <div className="info-container">
            <CardInfo infoAnime={infoAnime} infos={infos} />
            <div className="info-trailer">
              <CardSynopsis infoAnime={infoAnime} />
              {infoAnime?.trailer.embed_url !== null ? (
                <>
                  <h2>Trailer:</h2>
                  <div className="trailer">
                    <Ratio aspectRatio="16x9">
                      <embed
                        type="video/webm"
                        src={infoAnime?.trailer.embed_url}
                      />
                    </Ratio>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Anime;
