import { Button, Card } from "react-bootstrap";
import { TopProps } from "../types/animes";

type Props = {
  data: TopProps[];
  page?: string;
};

const Cards = ({ data }: Props) => {
  return (
    <div className="cardContainer">
      {data.map((data, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={data.images.jpg.image_url} />
              <Card.Body>
                <Card.Title>
                  {data.title} | Score:{" "}
                  {data.score !== null ? data.score : "N/A"}
                </Card.Title>
                <Button
                  variant="primary"
                  onClick={() =>
                    (window.location.href = `/AnimeDB/#/animes/${data.mal_id}`)
                  }
                >
                  See More
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
