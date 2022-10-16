function generateStackIcon(sidebar) {
    return(`
        <span class="fa-stack wd-small">
            <i class="${sidebar.iconMain} fa-stack-2x" style="text-align: left"></i>
            <i class="${sidebar.iconSub} fa-stack-1x fa-inverse" style="width: 80%"></i>
        </span>
    `)
}
const navSidebarItem = (sidebar, active) => {
    let activeStatus = active === sidebar.name ? "active" : "";
    let icon;
    if(sidebar.stack) {
        icon = generateStackIcon(sidebar)
    } else {
        icon = `<i class="${sidebar.iconMain}"></i>`
    }
    return(`
        <a href="${sidebar.source}" class="list-group-item ${activeStatus}">
            <div class="row">
                <div class="col-xl-2">
                    ${icon}
                </div>
                <div class="d-none d-xl-inline text-capitalize col-xl-10">${sidebar.name}</div>
            </div>
        </a>
    `);
}

export default navSidebarItem;

// For text only
// $('#wd-nav').append(`
//     ${navSidebarItem(
//         // {
//         //     active: false,
//         //     stack: false,
//         //     source: "/",
//         //     iconMain: "fab fa-twitter",
//         //     iconSub: "",
//         //     name: "",
//         // },
//         // {
//         //     active: false,
//         //     stack: false,
//         //     source: "../HomeScreen/index.html",
//         //     iconMain: "fas fa-home",
//         //     iconSub: "",
//         //     name: "Home",
//         // },
//         //
//         {
//             active: false,
//             stack: true,
//             source: "/",
//             iconMain: "fas fa-circle",
//             iconSub: "fas fa-ellipsis-h",
//             name: "More",
//         }
//     )}
// `)