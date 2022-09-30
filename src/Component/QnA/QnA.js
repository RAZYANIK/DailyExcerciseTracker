import React from 'react';
import './QnA.css'
const QnA = () => {
    return (
        <div className='qna-section'>
            <h1>How Does React Work?</h1>
            <br />
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable.ctJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            <br />
            <h1>Difference between props and state?</h1>
            <br />
            <p>
                The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again. <br />
                On the other hand, Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

                Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.<br />
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            <br />
            <h1>Where else is useEffect used apart from data loading with API?</h1>
            <br />
            <p>
                Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them.<br />
                -Running on state change: validating input field<br />
                -Running on state change: live filtering<br />
                -Running on state change: trigger animation on new array value<br />
                -Running on props change: update paragraph list on fetched API data update<br />
                -Running on props change: updating fetched API data to get BTC updated price<br />
                It is used for side effects. Like if browser is closed or reloaded, useEfect can help retrieve user interacted data from the local storage.</p>
        </div>
    );
};

export default QnA;