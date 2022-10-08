import '../css/PostPreview.css';

function PostPreview(props) {
    return (
        <>
            <div className="PostPreview">
                <h1 className="PostPreview-Title">{props.title}</h1>
                <p className="PostPreview-Date">{props.date}</p>
                <div className="PostPreview-Content">
                    <p className="PostPreview-Text">
                        {props.content}
                    </p>
                </div>
            </div>
        </>
    );
}
  
export default PostPreview;