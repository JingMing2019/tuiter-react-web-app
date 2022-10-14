/* eslint-env jquery */
import WhoToFollowListItem from "./WhoToFollowListItem.js";

$('#wd-explore').append(`
    ${WhoToFollowListItem({
        avatarIcon: '../images/virgingalactic-logo.png',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
    })};
`)