import axios from 'axios';

export interface User {
  name: string;
  email: string;
  apartment: number;
  password: string;
}

// export const renderUsers = (): Promise<User[]> => {
//     return Api.get<User[]>("/user").then(response => response.data)
// }

// export const createUser = (user: Omit<User, "id">): Promise<User> => {
//     return Api.post<User>("/user", user).then(response => response.data)
// }

// export const useApi = () => (
//     {
//         validateToken: async (token: string) => {
//             const response = await Api.post('/validate', { token });
//             return response.data;
//         },
//         signin: async (email: string, password: string) => {

//             const response = await axios.post('http://localhost:4000/login', { email, password });
//             return response.data;
//         },

//         logout: async () => {
//             const response = await Api.post('/logout');
//             return response.data;
//         },
//     }
// )

export const api = axios.create({
  baseURL: 'http://localhost:4000'
});

export const loginApi = async (email: string, password: string) => {
  return api.post('/login', { email, password });
};
