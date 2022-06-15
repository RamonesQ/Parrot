import axios from "axios";

interface User {
    name: string,
    email: string,
    apartment: number,
    password: string,

}

const Api = axios.create({
    baseURL: "http://localhost:4000"
})

export const renderUsers = (): Promise<User[]> => {
    return Api.get<User[]>("/user").then(response => response.data)
}

export const createUser = (user: Omit<User, "id">): Promise<User> => {
    return Api.post<User>("/user", user).then(response => response.data)
}
export default Api