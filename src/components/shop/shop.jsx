import React, { useEffect, useContext } from "react";
import "./shop.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Shop = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

        const getCategories = () => {
            fetchDataFromApi("/api/categories?populate=*").then((res) => {
                console.log(res);
                setCategories(res);
            });
        };

        const getProducts = () => {
            fetchDataFromApi("/api/products?populate=*").then((res) => {
                console.log(res);
                setProducts(res);
            });
        };

return (
    <div>
        <div className="main-content">
            <div className="layout">
                <Products
                    headingText="Popular Products"
                    products={products}
                />
                
            </div>
        </div>

    </div>
)
};

export default Shop;
