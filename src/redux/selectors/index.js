import { createSelector } from "reselect";

const reddits = state => state.reddits.data ? state.reddits.data : [] ; 

export const resultSelectors = createSelector(reddits, (result) => {
    let res = result.map((item) => {
        let data = item.data;
        return {
            author: data.author,
            description: data.selftext,  
            img: data.thumbnail,
            bigimage: data.url
        }
    });
    return {
        result: res
    }
})