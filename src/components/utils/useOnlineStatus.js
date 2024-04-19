import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //as it will be called only only once so to do thing only once we use useEffect.
    const [onlinestatus, setonlinestatus] = useState(true);
    useEffect (() => {

        window.addEventListener("offline", () => {
            setonlinestatus(false);
        });

        window.addEventListener("online", () => {
            setonlinestatus(true);
        });
    },[]);

    //boolean value
    return onlinestatus;
}

export default useOnlineStatus;