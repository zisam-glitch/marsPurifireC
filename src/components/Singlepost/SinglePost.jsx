
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Singlepost.scss";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/posts?populate=*&[filters][id]=${id}`);

    if (!data) return;
    const post = data?.data[0].attributes

    return (
        <div className="single-post-main-content">
            <div className="lay">
                <div className="post-area">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL +
                            post.image.data.attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{post.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
