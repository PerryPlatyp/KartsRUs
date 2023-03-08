import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const placeholderImage = '/../public/placeholder.png';

function ItemCarousel() {
    return (
        <div className="bg-light">
            <Container className="mt-5">
                <Row className="py-5">
                    <Col>
                        <Carousel
                            interval={3000}
                            pause={false}
                            indicators={false}
                            controls={false}
                            wrap={true}
                            slide={true}
                        >
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Image src={placeholderImage} alt="placeholder image" width={600} height={400} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Image src={placeholderImage} alt="placeholder image" width={600} height={400} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Image src={placeholderImage} alt="placeholder image" width={600} height={400} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Image src={placeholderImage} alt="placeholder image" width={600} height={400} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Image src={placeholderImage} alt="placeholder image" width={600} height={400} />
                                </div>
                            </Carousel.Item>
                        </Carousel>
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
