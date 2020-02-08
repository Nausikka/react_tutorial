console.log('The app is running');

// JSX - JavaScript XML

const template = (
  <p>
    Dnes to uz hadam pojde lepsie. TA zda sa ze tu sa uz naozaj neda nikomu
    verit{' '}
  </p>
);
const appRoot = document.getElementById('app');
const newObject = {
	Title: 'Toto je titulka pre: Tutorial React',
	Subtitle: 'Subtitle: My new app',
  Options: ["one", "two"]
};

function getLocation(location) {
	if (location) {
		return <p>location:{location} </p>;
	}
};
	const templatetwo = (
  <div>
	  <h1>{newObject.Title}</h1>
	  {newObject.Subtitle && <p>{newObject.Subtitle}</p>}
	  <p>{newObject.Options.length>0 ? "Here are your options" : "No Options" }</p> 
		  <ol>
		  <li>Item one</li>
		  <li>Item two</li>
	  </ol>

	  {/* {getLocation(newObject.Location)} */}
  </div>
);

const minusOne = () => console.log("minusOne");
const reset = () => console.log("reset");

const templateThree = (
	<div>
<button onClick={minusOne}>-1</button>
<button onClick={reset}>reset</button>
	</div>
)

//render 'template' elemet into 'appRoot' element
ReactDOM.render(templateThree, appRoot);
