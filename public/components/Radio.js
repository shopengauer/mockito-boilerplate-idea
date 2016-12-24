/**
 * Created by Василий on 05.11.2016.
 */
"use strict"

import React from 'react'

export default class Radio extends React.Component{

    constructor(props){
        super(props);
        this.state = {cook: true}
        this.rt = this.rt.bind(this);
    }

    rt(){
        this.setState({cook: !this.state.cook});
        console.log(this.state.cook)
    }


    render(){

        const qu = String(this.state.cook);


        return(
            <div>
                <h1>{qu}</h1>
                <input type="radio" onChange={this.rt} checked={this.state.cook}/>
                <button className="btn btn-primary" onClick={this.rt}>Button</button>
            </div>
        )
    }

}