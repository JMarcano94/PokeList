import axios, {AxiosResponse} from 'axios';

export async function axiosService(url: string): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get(url, {timeout: 5000});
    if (response.data) {
      return response.data;
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error: any) {
    if (error.response) {
      console.error(
        'Error de respuesta del servidor:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
}
