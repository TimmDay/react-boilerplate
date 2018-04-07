// console.log('linked up');

class Counter extends React.Component {

    // re-binding methods
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
            // count: props.count
        };
    }
    componentDidMount(){
        //fetch
        const num = parseInt(localStorage.getItem('count'),10);

        // avoid NaN errors
        if (!isNaN(num)) {
            this.setState(() => ({ count: num}))
            // localStorage.clear();
        }

    }
    componentDidUpdate(prevProps, prevState){
        //save
        if (prevState.count !== this.state.count) {
            // console.log('saved data');
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };



ReactDOM.render(<Counter />, document.getElementById('app'));