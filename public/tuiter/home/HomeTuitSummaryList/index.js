import HomePostSummaryItem from "./HomePostSummaryItem.js";
import homePosts from "./homePosts.js";
const HomeTuitSummaryList = () => {
    return (`
        
        ${
        homePosts.map(post => {
            return(HomePostSummaryItem(post));
        }).join('')
    }   
    `);
}

export default HomeTuitSummaryList;