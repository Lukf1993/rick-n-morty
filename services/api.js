import axios from 'axios';
import { API_URL } from './config';


const get = (collection, id) => {
  return axios
    .get(`${API_URL}/${collection}/${id || ''}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export const getPage = (id) => {
  return axios
    .get(`${API_URL}/character?page=${id || ''}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getAllCharacters = () => get('character');
export const getSingleCharacter = (id) => get('character' , id);

export const getAllEpisodes = () => get('episode');
export const getSingleEpisode = (id) => get('episode' , id);

export const getAllLocations = () => get('location');
export const getSingleLocation= (id) => get('location' , id);



