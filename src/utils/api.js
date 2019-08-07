import axios from 'axios';
const BASEURL = 'http://www.omdbapi.com/';
const APIKEY = '&apikey=b52b0063';
export default {
  search: function(query) {
      console.log('search', `${BASEURL}?t=${query}${APIKEY}&plot=full` )
    return axios.get(`${BASEURL}?s=${query}${APIKEY}&plot=full`);
  },
};
