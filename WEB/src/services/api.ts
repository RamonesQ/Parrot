import axios from "axios";

 export interface User {
    name: string,
    email: string,
    apartment: number,
    password: string,

}




 export const Api = axios.create({
     baseURL: "http://localhost:4000",
     headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEyLCJub21lIjoiQ2FybG9zIiwiZW1haWwiOiJDYXJsb0BnbWFpbC5jb20iLCJpYXQiOjE2NTUwNzQ1NDd9.CIgyuA6ZHGWIAH3oUCxwznrDMb1T0xJ7RwqgzcSxOYA'
     }
 })

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
    baseURL: 'http://localhost:4000',
});

export const loginApi = async (email: string, password: string) => {
    return api.post('/login', { email, password });
};
