import React, { Component } from 'react';
import {render} from 'react-dom';
import Page from "../components/Page.jsx";
import 'bootstrap/dist/css/bootstrap.css';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
var FileSaver = require("filesaver.js");
var Base64 = require('js-base64').Base64;
var base64 = require('base64-js')


export default class App extends Component {

  constructor(){
    super();

  }


   handleFetch(){
    console.log("Click button");
    var url = "http://localhost:8081/json";
    fetch(url,{method:'get'}).then(function(response){
         //console.log(response.json());
        response.json().then(function(data) {
            console.log(data);
        });

     })
   }

   createFileToDownload(data){
       let blob = new Blob(["Hello"],{type:"text/plain;charset=utf-8"});
       FileSaver.saveAs(blob,"workbook.txt");
   }



   handleFetchPost(){
    var url = "http://localhost:8081/workbook";
    var payload =  {
        startDate: new Date().toLocaleDateString("ru"),
        endDate: new Date().toLocaleDateString("ru")};

    var data = new FormData();
    data.append("startDate",payload.startDate);
    data.append("endDate",payload.endDate);

    fetch(url,{method:'post',body:data})
        .then(function(response){
        response.json().then(function(data) {

            console.log(data.workbookText);
            console.log(base64.toByteArray(data.workbookText));
            let blob = new Blob([base64.toByteArray(data.workbookText)]);
            //console.log(blob);
            FileSaver.saveAs(blob,"testfile.xls");

            //this.createFileToDownload("Hello");
        });
     })
   }



  render(){

      var date = new Date().toLocaleDateString("ru");

      return (
         <div>
             {date}
             <button onClick={this.handleFetch}>Get</button>
             <button onClick={this.handleFetchPost}>Post</button>
             <button onClick={this.createFileToDownload}>Save</button>
         </div>
    );
  }
}


