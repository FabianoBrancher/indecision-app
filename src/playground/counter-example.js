const user = {
    name: 'Fabiano Brancher',
    age: 34,
    location: 'Maringá'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const userName = 'Fabiano Brancher';
const userAge = 34;
const userLocation = 'Maringá';

const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Annonymous'} </h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}

        {getLocation(user.location)}
    </div>
);
 */

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

//ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
