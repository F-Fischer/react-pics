import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID cOicLs3CBzYUUFIiqvBOjruI0LMNqStzEh8ETMFg5Yc'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;