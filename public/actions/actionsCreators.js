/**
 * Created by vasiliy on 20.11.16.
 */
"use strict"

import {

         PANEL_VISIBLE
        } from "../constants/actionsTypes"


export const changeRightPanelVisibility = (a,b) => ({
    type: PANEL_VISIBLE,
    payload:  {
        leftPanel: a,
        rightPanel: b
    }
});
