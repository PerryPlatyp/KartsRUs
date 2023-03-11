import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import * as PropTypes from "prop-types";

const placeholderImage = '/../public/placeholder.png';

function CarouselComponent(props) {
    return <Carousel
        interval={3000}
        pause={false}
        indicators={false}
        controls={false}
        wrap={true}
        slide={true}
    >
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <Image src={placeholderImage} alt="placeholder image" width={600} height={400} style={props.style}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <Image src={placeholderImage} alt="placeholder image" width={600} height={400} style={props.style}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <Image src={placeholderImage} alt="placeholder image" width={600} height={400} style={props.style}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <Image src={placeholderImage} alt="placeholder image" width={600} height={400} style={props.style}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
                <Image src={placeholderImage} alt="placeholder image" width={600} height={400} style={props.style}/>
            </div>
        </Carousel.Item>
    </Carousel>;
}

CarouselComponent.propTypes = {style: PropTypes.shape({objectFit: PropTypes.string})};

function ItemCarousel() {
    const imageStyle = {
        objectFit: "contain"
    };
    return (
        <div className="bg-light">
            <Container className="mt-5">
                <Row className="py-5">
                    <Col>
                        <CarouselComponent style={imageStyle}/>
                        <div className="text-center my-3">
                            <h2>Check out our newest collection</h2>
                            <Button variant="primary">See more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemCarousel;
