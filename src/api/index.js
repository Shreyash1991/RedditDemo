import axios from 'axios';

export const fetchReddits = (reddit) => axios.get("https://www.reddit.com/r/"+reddit+".json")