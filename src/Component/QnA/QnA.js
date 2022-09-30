import React from 'react';
import './QnA.css'
const QnA = () => {
    return (
        <div className='qna-section'>
            <h1>How Does React Work?</h1>
            <br />
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.ctJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            <br />
            <h1>Difference between props and state?</h1>
            <br />
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            <br />
            <h1>Where else is useEffect used apart from data loading with API?</h1>
            <br />
            <p>It is used for side effects. Like if browser is closed or reloaded, useEfect can help retrieve user interacted data from the local storage.</p>
        </div>
    );
};

export default QnA;