import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StackIcon from "./stack-icon";

const Icon = (
    {
        isStack = false,
        iconMain = "fa-brands fa-twitter",
        iconSub = "fa-brands fa-twitter"
    }
) => {
    return(
        <>
            {!isStack && <FontAwesomeIcon icon={iconMain}/>}
            {isStack && <StackIcon iconMain={iconMain} iconSub={iconSub}/>}
        </>
    )
}

export default Icon;