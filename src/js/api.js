import axios from 'axios';

const url = 'https://pixabay.com/api';
const key = '31503481-01b895d3fefb9a8f7de362945';
const image_type = 'image_type=photo';
const orientation = 'orientation=horizontal';
const safesearch = 'safesearch=true';

export async function fetchImages(name, page) {
  try {
    const result = axios.get(
      `${url}/?key=${key}&q=${name}&${image_type}&${orientation}&${safesearch}&page=${page}&${per_page}`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

const per_page = 'per_page=40';
