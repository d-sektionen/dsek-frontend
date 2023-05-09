import '../css/PostPreview.css';
import Link from './Link';

function PostPreview(props) {
    function createMarkup(c) {
        return { __html: c };
    }
    const pageId = "/blogpost/" + props.id
    return (
        <>
            <div className="PostPreview">
                <h1 className="PostPreview-Title"><Link to={pageId}>{props.title}</Link></h1>
                <p className="PostPreview-Date">{props.date}</p>
                {props && <div className="PostPreview-Content" dangerouslySetInnerHTML={createMarkup(props.content)}></div>}
            </div>
        </>
    );
}

export default PostPreview;