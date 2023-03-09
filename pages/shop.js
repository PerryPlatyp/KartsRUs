import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { getProducts } from "../utils/stripe";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            <div className="container my-4">
                <h1>Shop</h1>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={product.images[0]}
                                    className="mx-auto"
                                    style={{ width: "300px", height: "500px", objectFit: "contain" }}
                                />

                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text>{product.price}</Card.Text>
                                    <Link href={`/item?id=${product.id}`}>
                                        <Button variant="primary">View Item</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;