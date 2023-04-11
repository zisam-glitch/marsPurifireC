import React, { useEffect, useContext } from "react";
import "./Blog.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Post from "./Post/Post";

const Blog = () => {
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
        <>
        <div className="title-blog">
            <h1>Our Latest News</h1>
        </div>
            <div>
                <Post posts={posts} />
            </div>
        </>
    )
};

export default Blog;
