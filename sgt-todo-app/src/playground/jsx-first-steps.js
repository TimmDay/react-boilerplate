console.log('App.js is running');

// JSX - Javascript XML


// app obj
const app = {
    title: 'Indecision App',
    subtitle: 'list your things, the oracle chooses what to do first',
    options: []
};


const onFormSubmit = (event) => {
    // console.log(event.target.elements);
    event.preventDefault(); //stop the full page refresh on form submit

    // get value user typed
    // add it to options
    // clear the inputted value

    const item = event.target.elements.option.value;
    // console.log(item);
    // console.log("form submitted");

    //event target returns the DOM element

    if (item) {
        app.options.push(item);
        // console.log(app.options);

        event.target.elements.option.value = "";
        renderApp();
    }
};

function emptyOptions() {
    app.options = [];
    renderApp();
}

function onMakeDecision() {
    const r = Math.floor(Math.random()*app.options.length);
    const decision = app.options[r];
    console.log(decision);
}


const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? " here are options" : "no options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={emptyOptions}>remove all</button>

            <ol>
                {
                    app.options.map((o) =>  <li key={o}>this?  {o}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();

// rendering
// // our fake db return obj
// const user = {
//     name: 'Tim',
//     age: 30,
//     location: 'Reutlingen'
// };
//
// function getLoc(loc){
//     if (loc){ //truthy
//         return <p>Location: {loc}</p>;
//     }
// }
//
// // show age only if it exists, and the user is 18 or older
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name+'!' : 'unknown'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLoc(user.location)}
//     </div>
// );


// let count = 0;
// const someId = 'id1';
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button id={someId} className="button">+1</button>
//     </div>
// );
// console.log(templateTwo);

