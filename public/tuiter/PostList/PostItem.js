/* eslint-env jquery */
const PostItem = (post) => {
    // Mark part of the title text as blue
    let title = post.title;
    let newTitle = title.replace(post.markText, '<span class="text-primary">' + post.markText + '</span>');
    let postImageClass = "w-100 wd-rounded-top";
    let postContentClass = "border-top border-secondary px-3 py-3";
    if (!post.postTitle) {
        postImageClass = "w-100 rounded-4";
        postContentClass = "d-none";
    }
    return(`
<!--    Single Post -->
        <div class="list-group-item bg-transparent pt-3">
            <div class="row">
<!--            Left: user avatar -->
                <div class="col-2">
                    <img src="${post.userAvatar}" class="rounded-circle" alt="avatar">
                </div>
<!--            Right: post main content -->
                <div class="col-10">
<!--                User information -->
                    <div class="row align-items-center">
                        <div class="col-11">
                            ${post.userName}
                            <span><i class="fas fa-check-circle"></i></span>
                            <span class="text-secondary">@${post.userHandle} &#x2022 ${post.time}</span>
                        </div>
                        <div class="col-1"><span><i class="fas fa-ellipsis-h text-secondary float-end"></i></span></div>
                    </div>
<!--                Post Title -->
                    <div>
                        ${newTitle}
                    </div>
<!--                Post -->
                    <div class="border border-secondary rounded-4 my-3">
                        <img src="${post.postImage}" class="${postImageClass}" alt="Post Image"/>
                        <div class="${postContentClass}">
                            <h6 class="mb-0">${post.postTitle}</h6>
                            <p class="text-secondary mb-0">${post.postContent}</p>
                            <a href="${post.postLink}" class="text-secondary text-decoration-none">
                                <span><i class="fas fa-link"></i></span>
                                ${post.postLinkName}
                            </a>
                        </div>
                    </div>
<!--                Bottom Icons -->
                    <div class="row mb-2">
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-comment"></i></span>
                            <span>${post.reply}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="fa-solid fa-retweet"></i></span>
                            <span>${post.retweet}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-heart"></i></span>
                            <span>${post.like}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
<!--                        font awesome 6-->
                            <span class="pe-2"><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    `);
}

export default PostItem;

// Used for test only
// $('#wd-post').append(`
//     ${PostItem(
//         {
//             userAvatar: "../../images/avatar-elonmusk.jpeg",
//             userName: "Elon Musk",
//             userHandle: "elonmusk",
//             time: "23h",
//             title: "Amazing show about @Inspiration4x mission!",
//             markText: "@Inspiration4x",
//             postImage: "../../images/post-elonmusk.jpeg",
//             postTitle: "Countdown: Inspiration4x Mission to Space | Netflix Office Site",
//             postContent: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 " +
//                 "crew on the first all-civilian orbital space...",
//             postLinkName: "netflix.com",
//             postLink: "https://www.netflix.com/",
//             reply: "4.2K",
//             retweet: "3.5K",
//             like: "37.5K",
//         },
//     )}
// `)