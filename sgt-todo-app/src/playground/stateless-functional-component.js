// class-based component
// if it needs to have state
// if you need lifecycle methods

// stateless function component
    // simple components. single function render (presentational components)
    // var named function, very similar to the render method. just return JSX!
    // do not manage state, but do still allow props
    // do NOT have access to this

    // FASTER - because do not come with overhead of being a class and extending Component
    // perhaps easier to read and write
    // easier to test
    // no lifecycle methods (faster)



const User = (props) => {
  return (
      <div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
      </div>
  );
};

ReactDOM.render(<User name="Tim" age={30} />, document.getElementById('app'));