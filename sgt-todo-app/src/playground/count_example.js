let count = 0;
const addOne = () => {
    count++;
    renderApp();
};
function minusOne() {
    count--;
    renderApp();
}
function reset() {
    count = 0;
    renderApp();
}



const appRoot = document.getElementById('app');


const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    console.log(templateTwo);

    ReactDOM.render(templateTwo, appRoot);
}

renderApp();