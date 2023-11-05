import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../css/PostPreview.css';
import Link from './Link';

import { showDatetime } from '../utils/ShowDatetime';

function PostPreview(props) {
    const pageId = "/blogpost/" + props.slug
    return (
        <>
            <div className="PostPreview">
                <h1 className="PostPreview-Title"><Link to={pageId}>{props.title}</Link></h1>
                <p className="PostPreview-Date">{showDatetime(props.date)}</p>
                {props &&
                    <div className="PostPreview-Content">
                        <Markdown remarkPlugins={[remarkGfm]}>{props.content}</Markdown>
                    </div>}
            </div>
        </>
    );
}

export default PostPreview;