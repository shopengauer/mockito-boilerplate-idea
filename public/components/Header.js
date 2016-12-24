/**
 * Created by vasiliy on 13.11.16.
 */
"use strict"

import React,{Component} from "react";

export default class Header extends Component{


    constructor() {
      super();
    }


    render(){


        return(
            <div className="header">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Header</h1>
                    </div>
                </div>
            </div>
        )

    }

}

