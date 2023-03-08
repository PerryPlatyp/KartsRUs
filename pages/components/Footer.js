import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="https://www.tiktok.com/" legacyBehavior={true}>
                                    <a target="_blank" rel="noopener noreferrer">
                                        TikTok
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/" legacyBehavior={true}>
                                    <a target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.twitter.com/" legacyBehavior={true}>
                                    <a target="_blank" rel="noopener noreferrer">
                                        Twitter
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: contact@company.com</li>
                            <li>Phone: (555) 555-5555</li>
                            <li>Address: 123 Main St, Anytown USA 12345</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
