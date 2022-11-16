import TuitsListItem from "./tuits-list-item";
import {useDispatch, useSelector} from "react-redux";

import React, {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {
    // const tuits = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <div className="list-group">
            {/* if loading flag is true, then show a loading message while data is stillcoming back from the server*/}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return(<TuitsListItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitsList;