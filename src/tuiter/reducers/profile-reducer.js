import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    firstName: "Pembroke",
    lastName: "Welsh Corgi",
    handle: "@pembrokewelshcorgi",
    profilePicture: "corgi.jpeg",
    bannerPicture: "golden-bridge.JPG",
    bio: "The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. It is one of two breeds known as a Welsh Corgi. Pembroke Welsh Corgis descended from the Spitz family of dogs.",
    website: "https://en.wikipedia.org/wiki/Welsh_Corgi",
    location: "San Jose, CA",
    dateOfBirth: "9/9/1999",
    dateJoined: "9/2010",
    followingCount: 1000,
    followersCount: 2000,
    tuits: 6000
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile
    }
);

export default profileSlice.reducer;