import { Add,Reset,Sub } from "../constants"

export const add = () => {
    return {type:Add}
}

export const sub = () => {
    return {type:Sub}
}

export const reset = () => {
    return{type:Reset}
}

