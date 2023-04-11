import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from 'react-markdown'
import "./SinglePost.scss";

const SinglePost = () => {

    const { id } = useParams();
    const { data } = useFetch(`/api/posts?populate=*&[filters][id]=${id}`);

  


    if(!data) return;
    const post = data?.data[0].attributes

    return (
        <>
        <div className="sg-post">
            <div className="titl-sg">{post.title}</div>
            <div className="img">
               <img src={process.env.REACT_APP_DEV_URL +
               post.img.data.attributes.url } alt="" />
            </div >
            <div className="infx">
            <span className="author">By: {post.author}</span>
            <span> - </span>
            <span className="date">On: {post.date}</span>
            </div>
            <ReactMarkdown>
            {post.desc}
            </ReactMarkdown>
            <div className="trd">{post.descx}</div>
        </div>
        </>
    );
};

export default SinglePost;
