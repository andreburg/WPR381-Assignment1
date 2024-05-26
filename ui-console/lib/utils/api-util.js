/** @param {Object} query @returns {string} */
const httpQuery = (query) => (Object.keys(query).reduce((prev, curr) => prev += `${curr}="${query[curr]}"&`, '?')).slice(0,-1);
    

/** @param {String} url @returns {Object} */
const httpGet = async (url, query) => {
    url = query ? url + httpQuery(query): url;
    const usersResponse = await fetch(url, {
        method: 'GET',
    })
    return usersResponse.json()
}

module.exports = {
    httpGet
}