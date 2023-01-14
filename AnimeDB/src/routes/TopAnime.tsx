import Cards from "../components/Cards";
import useGet from "../hooks/useGet";

const TopAnime = () => {
  const page: string = "animes";
  const { topData, loading } = useGet(page);
  return (
    <div className="top">
      <h1>TOP ANIMES</h1>
      {loading && <h1>Loading...</h1>}
      {!loading && <Cards data={topData} page={page} />}
    </div>
  );
};

export default TopAnime;
