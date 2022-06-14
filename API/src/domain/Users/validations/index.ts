import { create } from "./users/create";
import { destroy } from "./users/destroy";
import { getOne } from "./users/getOne";
import { update } from "./users/update";


export const UserValidation = {
    create,
    getOne,
    destroy,
    update,
};

