import "./Post.scss";

const Post = ( {posts} ) => {
    return (
        <div className="shop-by-category">
        <div className="categories">
            {posts?.data?.map((item) => (
                <div
                    key={item.id}
                    className="category"
                >
                    <img
                        src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        }
                    />
                </div>
            ))}
        </div>
    </div>
    );
};

export default Post;
