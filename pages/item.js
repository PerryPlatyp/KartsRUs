import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getProducts, getPrice } from "../utils/stripe";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

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
            const priceInCents = await getPrice(defaultPrice);
            const formattedPrice = (priceInCents.unit_amount / 100).toFixed(2);
            setPrice(formattedPrice);
        }

        if (id) {
            fetchProduct();
        }
    }, [id]);

// Show a loading message while the product is being fetched
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="container my-4">
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
                                {/* Display the formatted price */}
                                <Card.Text>${price}</Card.Text>
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