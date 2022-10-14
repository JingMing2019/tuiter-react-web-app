const postSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-md-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div><span class="fw-bolder">${post.userName}</span>
                        <span>
                            <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-3 col-md-2">
                    <img src="${post.image}" class="float-end rounded-3" width="90px" alt="React.js">
                </div>
            </div>
        </li>
    `)
}

export default postSummaryItem;

// $('#wd-post').append(`
//     <ul class="list-group">
//         ${postSummaryItem({
//             "topic": "Web Development",
//             "userName": "ReactJS",
//             "time": "2h",
//             "image": "../../images/reactjs.png",
//             "title": "React.js is a component based front end library that makes it very easy to build Single Page " +
//                 "Applications or SPAs",
//         })}
//     <ul>
// `)