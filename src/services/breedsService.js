import axios from 'axios'

const baseUrl = 'https://dog.ceo/api/breed';

/**
 * Attempts to fetch array of all dog breeds from the dog.ceo API, slicing the the first 12 elements of the array and returns it
 */
const getDogBreedNames = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}s/list/all`);
        const breedNamesArray = Object.keys(data.message).slice(0, 12);
        return breedNamesArray;
    } catch (err) {
        console.log(err.response);
    }
}

/**
 * Attempts to fetch array of image urls of a requested breed name from the dog.ceo API, limited to 10 elements and returns it
 */
const getRandomImagesByDogBreedName = async (breedName) => {
    try {
        const { data } = await axios.get(`${baseUrl}/${breedName}/images/random/10`);
        const dogBreedPictures = data.message;
        return dogBreedPictures;
    } catch (err) {
        console.log(err.response);
    }
}


export { getDogBreedNames, getRandomImagesByDogBreedName }





