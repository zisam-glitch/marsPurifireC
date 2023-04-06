import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Post from "./Post/Post";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories, posts, setPosts } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
        getPosts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getPosts = () => {
        fetchDataFromApi("/api/posts?populate=*").then((res) => {
            setPosts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };

   
return (
    <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Post posts={posts} />
              
                <Products
                    headingText="Popular Products"
                    products={products}
                />
                
            </div>
        </div>

    </div>
)
};

export default Home;
