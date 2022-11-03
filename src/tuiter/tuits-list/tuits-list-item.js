import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TuitsStats from "./tuits-stats";

const TuitsListItem = (
    {
        tuits = {
            _id: 234,
            topic: "Tesla",
            userName: "Tesla",
            time: "4d",
            title: "Autopilot and Full Self-Driving Capability",
            image: "tesla-logo.png",
            liked: false,
            replies: 234,
            retuits: 543,
            likes: 3456,
            handle: "@tesla",
            tuit: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver. Each new Tesla vehicle is equipped with eight external cameras and powerful vision processing to provide an additional layer of safety. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar."
        }
    }
) => {
    return(
        <div className="list-group-item pt-3 wd-post-list-item border border-light">
            <div className="row">
                {/* Left Avatar */}
                <div className="col-1">
                    <img src={`/images/${tuits.image}`} className="rounded-circle" width="48px" alt="avatar"/>
                </div>
                {/* Right Content */}
                <div className="col-11 ps-4">
                    {/* User's name handle and post time */}
                    <div className="row align-items-center">
                        <div className="col-11">
                            <span className="fw-bolder">{tuits.userName}{' '}</span>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary"/>
                            <span className="text-secondary">{' '}{tuits.handle} {'\u00B7'} {tuits.time}</span>
                        </div>
                        <div className="col-1">
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="text-secondary float-end"/>
                        </div>
                    </div>
                    {/* Tuit */}
                    <div className="mb-4">
                        {tuits.tuit}
                    </div>
                    {/* Bottom Icons */}
                    <TuitsStats tuits={tuits}/>
                </div>
            </div>
        </div>
    )
}

export default TuitsListItem;