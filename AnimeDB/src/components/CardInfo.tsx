import { Card, ListGroup } from "react-bootstrap";
import { AnimeProps } from "../types/animes";

type Props = {
  infoAnime?: AnimeProps;
  infos: string[];
};

const CardInfo = ({ infos, infoAnime }: Props) => {
  return (
    <div className="info-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={infoAnime?.images.jpg.image_url} />
        <Card.Body>
          <Card.Title>{infoAnime?.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Score: {infoAnime?.score !== null ? infoAnime?.score : "N/A"}
          </ListGroup.Item>
          <ListGroup.Item>
            {infos[0]}: {infoAnime?.year !== null ? infoAnime?.year : "N/A"}
          </ListGroup.Item>
          <ListGroup.Item>
            {infos[1]}:{" "}
            {infoAnime?.episodes !== null ? infoAnime?.episodes : "N/A"}
          </ListGroup.Item>
          <ListGroup.Item>
            {infos[2]}:{" "}
            {infoAnime?.duration !== null ? infoAnime?.duration : "N/A"}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CardInfo;
