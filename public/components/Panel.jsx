/**
 * Created by Pavlovens on 04.11.2016.
 */
"use strict"
import React, { Component } from 'react';
import Radio from './Radio';

export default class Panel extends Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
}

    handleChange() {
        this.props.onUserInput(
            this.refs.h1input.value,
        );
    }


    render(){
       return(
            <div >
              <Radio/>
              <input onChange={this.handleChange} type="text" ref = "h1input" value={this.props.parentState}/>
            </div>
        )
    }


}