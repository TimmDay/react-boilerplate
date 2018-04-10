import React from 'react';
import ReactDOM from 'react-dom';
import SgtTodoApp from './components/SgtTodoApp.js';

const Layout = (props) => {
    return (
        <div>
            <p> header component (pretend)</p>
            {props.content}
            {props.children}
            <p> footer </p>
        </div>
    );
};


const template = (
    <div>
        <h1> page title</h1>
        <p> this is the page</p>
    </div>
);

const blogpost = (
    <div>
        <h2>a blog post</h2>
        <img />
        <p> many cats</p>
    </div>
)

ReactDOM.render((
    <Layout content={template}>
        <p>inline JSX</p>
    </Layout>
), document.getElementById('app'));


