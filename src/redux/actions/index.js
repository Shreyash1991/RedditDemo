export const REQUEST_REDDITS = 'REQUEST_REDDITS';
export const RESPONSE_REDDITS = 'RESPONSE_REDDITS';
export const ERROR_REDDITS = "ERROR_REDDITS";

export const requestReddits = (reddit) => ({
    type: REQUEST_REDDITS,
    reddit
});