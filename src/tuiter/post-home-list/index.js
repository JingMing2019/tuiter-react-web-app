import PostHomeListItem from "./post-home-list-item";
import posts from './posts.json'

const PostHomeList = () => {
    return(
        <div className="list-group">
            {
                posts.map(post => {
                    return(<PostHomeListItem post={post}/>)
                })
            }
        </div>
    )
}

export default PostHomeList;