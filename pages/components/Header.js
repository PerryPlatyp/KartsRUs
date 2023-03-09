import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h1 className="font-weight-bold">Title</h1>
                    </div>
                    <div className="col-md-8">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link href="/" legacyBehavior={true}>
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" >
                                        <Link href="/shop" legacyBehavior={true}>
                                            <a className="nav-link">Products</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/cart" legacyBehavior={true}>
                                            <a className="nav-link">Cart</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/track" legacyBehavior={true}>
                                            <a className="nav-link">Track</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
