import * as React from "react";
import {Dispatch} from "react";

interface IsState {
    selectValue: string;
    name: string
}
interface ReducerContext {
    state: IsState;
    dispatch: Dispatch<ActionType>;
}
interface ActionType {
    type: string;
    payload: string
}
export const valueContext = React.createContext({} as ReducerContext);
export const reducer = (state: IsState, action: ActionType) => {
    switch (action.type) {
        case "ONCHANGE" :
            return {...state, selectValue: action.payload};
            break;
        default:
            return state;
    }
};