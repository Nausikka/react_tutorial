"use strict";

console.log('The app is running'); // JSX - JavaScript XML

var template = React.createElement("p", null, "Dnes to uz hadam pojde lepsie. TA zda sa ze tu sa uz naozaj neda nikomu verit", ' ');
var appRoot = document.getElementById('app');
var newObject = {
  Title: 'Toto je titulka pre: Tutorial React',
  Subtitle: 'Subtitle: My new app',
  Options: ["one", "two"]
};

function getLocation(location) {
  if (location) {
    return React.createElement("p", null, "location:", location, " ");
  }
}

;
var templatetwo = React.createElement("div", null, React.createElement("h1", null, newObject.Title), newObject.Subtitle && React.createElement("p", null, newObject.Subtitle), React.createElement("p", null, newObject.Options.length > 0 ? "Here are your options" : "No Options"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));

var minusOne = function minusOne() {
  return console.log("minusOne");
};

var reset = function reset() {
  return console.log("reset");
};

var templateThree = React.createElement("div", null, React.createElement("button", {
  onClick: minusOne
}, "-1"), React.createElement("button", {
  onClick: reset
}, "reset")); //render 'template' elemet into 'appRoot' element

ReactDOM.render(templateThree, appRoot);
