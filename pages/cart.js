import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { getProducts, getPrice } from "../utils/stripe";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Spinner } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cookies, setCookie] = useCookies([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            setIsLoading(true);
            const cartItems = cookies.cartItems || [];
            const products = await getProducts();
            const prices = await Promise.all(
                products.map((product) => getPrice(product.default_price))
            );
            const productsWithPrices = products.map((product, i) => ({
                ...product,
                price: (prices[i].unit_amount / 100).toFixed(2),
            }));
            setProducts(productsWithPrices.filter((product) =>
                cartItems.includes(product.id)
            ));
            setIsLoading(false);
        }

        fetchProducts();
    }, [cookies.cartItems]);

    const handleRemoveFromCart = async (productId) => {
        const cartItems = cookies.cartItems.filter((id) => id !== productId);
        setCookie("cartItems", cartItems);
        setProducts(products.filter((product) => product.id !== productId));
    };

    // Show a loading message while the products are being fetched
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="secondary" size="lg" />
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="container my-4">
                <h1>Cart</h1>
                {products.length === 0 && (
                    <Alert variant="info">Your cart is empty</Alert>
                )}
                {products.map((product) => (
                    <div key={product.id} className="my-4">
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleRemoveFromCart(product.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
