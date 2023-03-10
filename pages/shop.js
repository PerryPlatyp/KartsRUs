import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { getProducts } from "../utils/stripe";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }, []);

    const searchProducts = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredProducts = products.filter((product) => {
        const titleMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const descriptionMatch = product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || descriptionMatch;
    });

    const searchResults = filteredProducts.sort((a, b) => {
        const aTitleMatch = a.name.toLowerCase().indexOf(searchTerm.toLowerCase());
        const aDescriptionMatch = a.description.toLowerCase().indexOf(searchTerm.toLowerCase());
        const bTitleMatch = b.name.toLowerCase().indexOf(searchTerm.toLowerCase());
        const bDescriptionMatch = b.description.toLowerCase().indexOf(searchTerm.toLowerCase());
        const aRelevance = aTitleMatch >= 0 ? aTitleMatch : aDescriptionMatch;
        const bRelevance = bTitleMatch >= 0 ? bTitleMatch : bDescriptionMatch;
        return aRelevance - bRelevance;
    });

    return (
        <>
            <Header />
            <div className="container my-4">
                <h1>Shop</h1>
                <div className="row mb-4">
                    <div className="col-md-4 offset-md-4">
                        <input type="text" className="form-control" placeholder="Search products" onChange={searchProducts} />
                    </div>
                </div>
                <div className="row">
                    {searchResults.map((product) => (
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
