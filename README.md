# React Boilerplate - Uni Tü

It can be intimidating to come to the React framework from other javascript environments, or to start with it as the first place in your front-end learning journey.

It can take some getting used to, but the effort is worth it. 
This guide will give a basic walkthrough of a react boilerplate by Tim Day.

Maybe you have even already done a react course, or ten.
I'll try to be brief but thorough - I recommend using this guide as a quick way to identify what areas you need to learn more about, or to find terms that you've never heard before, and then head to youtube to fill the gaps. This alone will get you familiar with the concepts and the jargon, and hopefully act as a bit of a roadmap for the self-directed learners out there.
If you are looking for something deeper, I can strongly recommend this course: 

## Contents
- What is JSX
- How do props work?
- What is a component?
- What is Babel?
- What is Webpack?
- the Webpack config file
- the package.json file
- How do I import/export components?
- What is global state?
- What are props?
- What is the best thing about React?

## What is JSX?
JSX is essentially the ability to write HTML in a javascript file. This is useful, because it allows us to directly set up the js interactions in one place. It is a little bit of a paradigm shift... we are not so much building HTML pages with react, as we are building individual JS-powered components for use in Web Applications.

I'm going to give a complex example to demonstrate the syntax, because I believe in you.
```
const JSXComponent = (props) => {
  return (
    <div>
      {props.text}
      <button
        onClick = {() => {
          props.handleRegisterText(props.text)
        }}
      >
        Register
      </button>
    </div>
  );
); 
```
The JSX starts after the return statement. Notice the **( )**. JSX always happens inside **( )**.
Once we are inside the ( ) we can actually start writing HTML, like the div and the button.
The **{ }** are special. In JSX they do not represent a function block, they represent an insertion


## What is the best thing about React?
Why use react, when you can make your own modular-based work flow using vanilla javascript? First of all, your personal workflow will differ to everybody else's, so it is good to have a standard.
More importantly, React is powerful is powerful under the hood. In short, React uses a Virtual DOM and some powerful algorithms that cleverly render only the part of the page that needs to be re-rendered.
This is much more efficient than re-rendering the whole page every time some little change is made.

## What is Webpack?
A bundler, in short. When you hook it up with Babel (see above), your life becomes much easier.
The major benefit is that it will squish all your js into one minified (squished) file, so that your application will only ever need to make one call through a html script tag, instead of several or many.
Using the import/export utilities in js ES6, you can now break out your js code into as many small files as you want (which is great when you want Components to be small, maintainable and testable) and trust that webpack will put it all together at build time. It is having your cake (a more zen and organised development flow) and eating it too (most efficient code for deployment).
 Other benefits include that, through Babel, you can write clean up to date JS and not worry about old browsers not being able to deal with it. And also, you can use webpack to bundle your CSS into one minified file as well.
