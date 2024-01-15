import axios, {AxiosResponse, AxiosError} from 'axios';

export interface PokemonResponse {
  data: any;
  response: AxiosResponse;
}

export class AxiosServices {
  async get(url: string): Promise<PokemonResponse | AxiosError<unknown, any>> {
    if (!url) {
      throw new Error('URL is undefined');
    }
    return this.request('GET', url) as unknown as Promise<
      PokemonResponse | AxiosError<unknown, any>
    >;
  }

  async post(
    url: string,
    data: any,
  ): Promise<PokemonResponse | AxiosError<unknown, any>> {
    if (!url || !data) {
      throw new Error('URL or data is undefined');
    }
    return this.request('POST', url, data) as unknown as Promise<
      PokemonResponse | AxiosError<unknown, any>
    >;
  }

  async put(
    url: string,
    data: any,
  ): Promise<PokemonResponse | AxiosError<unknown, any>> {
    if (!url || !data) {
      throw new Error('URL or data is undefined');
    }
    return this.request('PUT', url, data) as unknown as Promise<
      PokemonResponse | AxiosError<unknown, any>
    >;
  }

  async delete(
    url: string,
  ): Promise<PokemonResponse | AxiosError<unknown, any>> {
    if (!url) {
      throw new Error('URL is undefined');
    }
    return this.request('DELETE', url) as unknown as Promise<
      PokemonResponse | AxiosError<unknown, any>
    >;
  }

  private async request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
  ): Promise<PokemonResponse | AxiosError<unknown, any>> {
    try {
      const response = await axios({
        method,
        url,
        data,
      });
      return {
        data: response.data,
        response,
      };
    } catch (error: any) {
      console.error(error);
      return {
        data: {},
        response: error.response,
      };
    }
  }
}
