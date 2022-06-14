import { create } from "./posts/create";
import { destroy } from "./posts/destroy";
import { getOne } from "./posts/getOne";
import { update } from "./posts/update";


export const PostValidation = {
    create,
    getOne,
    destroy,
    update,
};

