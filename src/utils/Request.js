import axios from 'axios';
export const BASE_URL = 'http://localhost:3000/api/v1';
// export const BASE_URL = 'https://kc-portfolio-backend.herokuapp.com/api/v1';

class Request {
  static async post(path, { body, headers }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'POST',
      data: body,
      headers: {
        ...headers,
        'Content-type': headers?.contentType || 'application/json',
      },
    });
    return result;
  }

  static async get(path, { body, headers }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'GET',
      data: body,
      headers: {
        ...headers,
        'Content-type': headers?.contentType || 'application/json',
      },
    });
    return result;
  }

  static async patch(path, { body, headers }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'PATCH',
      data: body,
      headers: {
        ...headers,
        'Content-type': headers?.contentType || 'application/json',
      },
    });
    return result;
  }

  static async delete(path, { headers }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-type': headers?.contentType || 'application/json',
      },
    });
    return result;
  }
}

export default Request;
