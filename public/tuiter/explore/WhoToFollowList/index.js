import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return (`
        
            <div class="list-group">
                <div class="list-group-item fw-bold fs-sm">
                    Who to follow
                </div>
                
                ${
                    who.map(user => {
                        return(WhoToFollowListItem(user));
                    }).join('')
                }
                
            </div>        
    `);
}

export default WhoToFollowList;