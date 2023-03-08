import React from 'react';

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="row justify-content-between align-items-center ">
                    <div className="col-md-4">
                        <h1 className="font-weight-bold">My Ecommerce Site</h1>
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
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Track</a>
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
