//variable url del servidor
const BASEURL = "https://type.fit/api";

export const apiGetQuotes = () => {
    const url = BASEURL + "/quotes" ;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
};
