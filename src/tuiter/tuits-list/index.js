import React, {useEffect} from "react";
import TuitItem from "./tuit-item"
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import WhatsHappening from "./whats-happening";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
            <WhatsHappening/>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {
                    tuits.map(tuit =>
                        <TuitItem
                            key={tuit._id} tuit={tuit}/> )
                }
            </ul>
        </div>
    );
};
export default TuitsList;