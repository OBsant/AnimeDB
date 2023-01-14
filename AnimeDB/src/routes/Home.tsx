import useGet from "../hooks/useGet";
import { Button, Form, InputGroup } from "react-bootstrap";
import Cards from "../components/Cards";
import { useState } from "react";
import { TopProps } from "../types/animes";

const Home = () => {
  const page: string = "home";
  const [all, setAll] = useState("");
  const { dataAllAnime, loading } = useGet(page, "", all);
  const dataAll: TopProps[] = dataAllAnime.filter((dataAllAnime) => {
    return dataAllAnime.title.toLowerCase().includes(all.toLowerCase());
  });
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    setAll(target.search.value);
    setSearch("");
  };

  return (
    <div className="home">
      <div className="home-search">
        <h1>Search Anime</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Anime"
              aria-label="Anime"
              aria-describedby="basic-addon2"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
            >
              Search
            </Button>
          </InputGroup>
        </Form>
      </div>
      {loading && <h1>Loading...</h1>}
      {!loading && <Cards data={dataAll} page={page} />}
    </div>
  );
};

export default Home;
