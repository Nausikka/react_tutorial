"use strict";

console.log("The app is running"); // JSX - JavaScript XML

var template = React.createElement("p", null, "Mna tu asi jebne dneska");
var appRoot = document.getElementById('app'); //render 'template' elemet into 'appRoot' element

ReactDOM.render(template, appRoot);
