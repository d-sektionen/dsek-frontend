import '../css/PostPreview.css';

function PostPreview(props) {
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <>
            <div className="PostPreview">
                <h1 className="PostPreview-Title">{props.title}</h1>
                <p className="PostPreview-Date">{props.date}</p>
                {props && <div className="PostPreview-Content" dangerouslySetInnerHTML={createMarkup(props.content)}></div>}
            </div>
        </>
    );
}
  
export default PostPreview;