import Card from "react-bootstrap/Card";
import { AnimeProps } from "../types/animes";

type Props = {
  infoAnime?: AnimeProps;
};

const CardSynopsis = ({ infoAnime }: Props) => {
  return (
    <>
      <Card>
        <Card.Header as="h5">Synopsis</Card.Header>
        <Card.Body>
          <Card.Text>{infoAnime?.synopsis}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardSynopsis;
