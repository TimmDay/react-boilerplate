console.log('App.js is running');

class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVis = this.handleToggleVis.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleToggleVis(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    };

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVis}>
                    {this.state.visibility ? 'Hide' : 'show'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Here are some details</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));






// let visible = false;
//
// function updateVisibility() {
//     visible = !visible;
//     renderApp();
// }
//
//
// function renderApp() {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={updateVisibility}>{!visible ? "Show Details" : "Hide Details"}</button>
//             {visible &&
//             <div>
//                 <p>Here are some details!</p>
//             </div>
//             }
//             <h3>Tim Day</h3>
//         </div>
//     );
//
//     ReactDOM.render(jsx, document.getElementById("app"));
// }
//
// renderApp();
