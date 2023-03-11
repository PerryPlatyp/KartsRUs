import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { getProducts, getPrice } from "../utils/stripe";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Spinner } from 'react-bootstrap';
import { RecurringAlert } from './components/RecurringAlert';

let priceInCents;
let interval;
const Item = () => {
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchProduct() {
            const products = await getProducts(id);
            setProduct(products[0]);

            // Get the price in cents and format it to a string with two decimal places
            const defaultPrice = products[0].default_price;
            priceInCents = await getPrice(defaultPrice);
            const formattedPrice = (priceInCents.unit_amount / 100).toFixed(2);
            setPrice(formattedPrice);
            if (priceInCents.type === 'recurring') {
                interval = priceInCents.recurring.interval;
            }else{
                interval = null;
            }
        }

        if (id) {
            fetchProduct();
        }
    }, [id]);

    // Show a loading message while the product is being fetched
    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="secondary" size="lg" />
            </div>
        );
    }

    // Conditionally render an alert if the price is a recurring payment
    const isRecurringPayment = priceInCents?.type === 'recurring';
    const recurringPaymentAlert = isRecurringPayment ? (
        <Alert variant="warning">
            This is a recurring payment and not a one-time payment.
        </Alert>
    ) : null;

    return (
        <>
            <Header />
            <div className="container my-4">
                {recurringPaymentAlert}
                <h1>{product.name}</h1>
                <div className="row my-4">
                    <div className="col-md-6">
                        <Card>
                            <Card.Img variant="top" src={product.images[0]} />
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                {/* Display the formatted price, if recurring is the kind then add per {recurring} to the price */}
                                <Card.Text>
                                    {price}
                                    {isRecurringPayment ? ` per ${interval}` : null}
                                </Card.Text>
                                {/* Add a button to add the item to the cart */}
                                <Button>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Item;
