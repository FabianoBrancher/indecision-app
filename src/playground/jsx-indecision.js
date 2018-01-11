console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // stop full page refresh
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }

}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert('Your choice is ' + option);
}

const appRoot = document.getElementById('app');

const render = () => {
  // JSX - JavaScript XML
  const template = (
      <div id="app">
          <h1>Movie Title: {app.title}</h1>
          {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'No Options'}</p>
          <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do? </button>
          <button onClick={onRemoveAll}> Remove All </button>
          <ol>
            {
              // app.options.map((option) => {
              //   return <li key={option}>{option} </li>
              // })
              app.options.map((option) => <li key={option}> {option} </li>)
            }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" placeholder="insert text here..." />
            <button> Add Option </button>

          </form>
      </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
