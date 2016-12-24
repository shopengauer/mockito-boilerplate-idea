/**
 * Created by vasiliy on 13.11.16.
 */
"use strict";

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionsCreators'
export class Page extends Component{

   constructor(){
        super();
   }


   render(){

       const {leftPanel, rightPanel} = this.props.panelsVisible
       const { changeRightPanelVisibility} = this.props.actionCreators

       const divStyle = {
           margin: '70px',

       };

       return(

           <div>
               <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                   <a className="navbar-brand" href="#">React from Tomcat</a>
                   <ul className="nav navbar-nav">
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Get started <span className="sr-only">(current)</span></a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="#">Doc</a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="#">Contact</a>
                       </li>
                   </ul>
               </nav>


               <div className="container-fluid" style={divStyle}>
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="card card-block">
                               <h3 className="card-title">{leftPanel}</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="card card-block">
                               <h3 className="card-title">{rightPanel}</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" onClick={(a,b)=>changeRightPanelVisibility(leftPanel,rightPanel)} className="btn btn-primary">Клац</a>
                           </div>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-sm-3">
                           <div className="card card-block">
                               <h3 className="card-title">Special title treatment</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                       </div>
                       <div className="col-sm-3">
                           <div className="card card-block">
                               <h3 className="card-title">Special title treatment</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-3">
                           <div className="card card-block">
                               <h3 className="card-title">Special title treatment</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                       </div>
                       <div className="col-sm-3">
                           <div className="card card-block">
                               <h3 className="card-title">Special title treatment</h3>
                               <p className="card-text">With supporting text below as a natural lead-in to additional
                                   content.</p>
                               <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                       </div>
                   </div>


               </div>
           </div>
       );
   }


}

function mapStateToProps(state) {
    return {
        panelsVisible: state.panelsVisible

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionCreators: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)