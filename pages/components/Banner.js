import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const placeholderImage = "/../public/placeholder.png";

function Banner() {
    return (
        <div className="bg-light">
            <Container>
                <Row className="py-5">
                    <Col md={6} className="d-flex align-items-center justify-content-center flex-column">
                        <h1 className="text-center mb-4">Product Name</h1>
                        <p className="lead text-center mb-5">
                            This is a short description of the product. It should be concise
                            and to the point, highlighting the key features and benefits of
                            the product.
                        </p>
                        <button className="btn btn-primary align-self-center">Buy Now</button>
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                            <Image
                                src={placeholderImage}
                                alt="product image"
                                width={500}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
