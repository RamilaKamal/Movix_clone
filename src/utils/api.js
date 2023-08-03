import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2EyMmNkODJmZTk0ODdkZWQ2Yzg1MzU1YjcwMjQwYyIsInN1YiI6IjY0YzhlMTcyZjc5NGFkMDBhZDA1OGNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGwcVGO6mLXz9uxx26U-ZzF34ufNFNRo-5G-U1SWloo';
;

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers, 
            params
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}