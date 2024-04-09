import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold underline">Home Page</h1>
            <Footer />
        </div>
    )
}

export default Home;