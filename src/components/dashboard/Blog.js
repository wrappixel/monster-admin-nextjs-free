import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";

const Blog = ({ image, title, subtitle, text, color }) => {
  return (
    <Card>
      <Image alt="Card image cap" src={image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3 text-muted">{text}</CardText>
        <Button color={color}>Read More</Button>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
