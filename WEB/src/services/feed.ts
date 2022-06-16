import { Api } from "./api";

interface PostPayload{
    

};


export function listarFeeds(){
    return Api.get("/post")
}

export function PublicarPost(payload: PostPayload){
    return Api.post("/post", payload)
}