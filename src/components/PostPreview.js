import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../css/PostPreview.css';
import Link from './Link';

import { showDatetime } from '../utils/ShowDatetime';

const BASE_URL = 'https://strapi.d-sektionen.se/api';

function PostPreview(props) {
    const pageId = "/blogpost/" + props.slug

    console.log(props.thumbnailURL)

    return (
        <>
            <div className="PostPreview">
                <h1 className="PostPreview-Title"><Link to={pageId}>{props.title}</Link></h1>
                <p className="PostPreview-Date">{showDatetime(props.date)}</p>
                <p className="PostPreview-Author">{props.author}</p>
                <image className="PostPreview-Image" src={BASE_URL + props.thumbnailURL} alt={props.thumbnailAlt} width={props.thumbnailWidth} height={props.thumbnailHeight} />
                <div className="PostPreview-Content">
                    <Markdown remarkPlugins={[remarkGfm]}>{props.content}</Markdown>
                </div>
            </div>
        </>
    );
}

export default PostPreview;