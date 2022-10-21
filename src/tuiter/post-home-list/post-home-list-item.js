import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostHomeListItem = (
    {
        post = {
            userAvatar: "../../images/avatar-elonmusk.jpeg",
            userName: "Elon Musk",
            userHandle: "elonmusk",
            time: "23h",
            title: "Amazing show about @Inspiration4x mission!",
            markText: "@Inspiration4x",
            postImage: "../../images/post-elonmusk.jpeg",
            postTitle: "Countdown: Inspiration4x Mission to Space | Netflix Office Site",
            postContent: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 " +
                "crew on the first all-civilian orbital space...",
            postLinkName: "netflix.com",
            postLink: "https://www.netflix.com/",
            reply: "4.2K",
            retweet: "3.5K",
            like: "37.5K",
        }
    }
) => {
    const roundedTop = {
        overflow: "hidden",
        "borderRadius": "1rem 1rem 0 0"
    }

    const markKeywordAsLink = (item, keyword) => {
        let re = new RegExp(keyword, 'g')
        return (
            item.replace(re, '<a href="/#" class="text-decoration-none text-primary">'+ keyword +'</a>')
        )
    }

    // Hiding post body when there is no post title and post content, and edit post image rounded corner accordingly
    let postImage = <img src={post.postImage} className="w-100 rounded-4" alt="Post"/>;
    let postBody = false;
    if (post.postTitle || post.postContent) {
        postImage = <img src={post.postImage} className="w-100" style={roundedTop} alt="Post"/>;
        postBody = true;
    }
    return(
        <div className="list-group-item pt-3 wd-post-list-item border border-light">
            <div className="row">
                {/* Left Avatar */}
                <div className="col-1">
                    <img src={post.userAvatar} className="rounded-circle" width="48px" alt="avatar"/>
                </div>
                {/* Right Content */}
                <div className="col-11 ps-4">
                    <div className="row align-items-center">
                        <div className="col-11">
                            {post.userName}{' '}
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary"/>
                            <span className="text-secondary">{' '}@{post.userHandle} {'\u00B7'} {post.time}</span>
                        </div>
                        <div className="col-1">
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="text-secondary float-end"/>
                        </div>
                    </div>
                    {/* Post Title */}
                    {/* like innerHTML in the browser*/}
                    <div dangerouslySetInnerHTML={{__html: markKeywordAsLink(post.title, post.markText)}}/>
                    {/* Inner Post */}
                    <div className="border rounded-4 my-3">
                        {postImage}
                        {postBody &&
                            <div className="border-top px-3 py-3">
                                <h6 className="mb-0">{post.postTitle}</h6>
                                <p className="text-secondary mb-0">{post.postContent}</p>
                                <a href={post.postLink} className="text-secondary text-decoration-none">
                                    <FontAwesomeIcon icon="fa-solid fa-link"/>
                                    {post.postLinkName}
                                </a>
                            </div>
                        }
                    </div>
                    {/* Bottom Icons */}
                    <div className="row mb-2">
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-regular fa-comment" className="pe-2" />
                            <span>{post.reply}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-solid fa-retweet" className="pe-2" />
                            <span>{post.retweet}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-regular fa-heart" className="pe-2" />
                            <span>{post.like}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className="pe-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostHomeListItem;