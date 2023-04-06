import "./Post.scss";

const Post = ( {posts} ) => {
    return (
        <div className="blog-pag">
        <div className="blog-card">
            {posts?.data?.map((item) => (
                <div
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                >
                    <img
                        src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        }
                    />
                    <h4 className="title-blg">title</h4>
                    <p>desc</p>
                    <span>date</span>
                    <span className="authr">Luke</span>
                    <span className="rdmr">Read More</span>

                </div>
            ))}
        </div>
    </div>
    );
};

export default Post;
