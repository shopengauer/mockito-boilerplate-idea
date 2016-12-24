/**
 * Created by vasiliy on 20.11.16.
 */
import { LEFT_PANEL_VISIBLE,PANEL_VISIBLE } from '../constants/actionsTypes'

const initialState = {
    leftPanel: "Hello From Left",
    rightPanel: "Hello From Right"
}

export default function page(state = initialState, action) {

    switch (action.type) {

        case PANEL_VISIBLE:
            return {
                leftPanel: action.payload.leftPanel + 1,
                rightPanel: action.payload.rightPanel +1
            }
        //{leftPanel:action.payload.leftPanel + "w", rightPanel:action.payload.rightPanel + "e"}

        default:
            return state;
    }

}


