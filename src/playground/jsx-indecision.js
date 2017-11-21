console.log('App.js is running!');

const app = {
<<<<<<< HEAD
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // stop full page refresh
  const option = e.target.elements.option.value;
  if(option) {
=======
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
<<<<<<< HEAD

}
=======
};
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f

const onRemoveAll = () => {
  app.options = [];
  render();
<<<<<<< HEAD
}
=======
};
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
<<<<<<< HEAD
  alert('Your choice is ' + option);
}
=======
  alert(option);
};
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f

const appRoot = document.getElementById('app');

const render = () => {
<<<<<<< HEAD
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
=======
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
  );

  ReactDOM.render(template, appRoot);
};

<<<<<<< HEAD

=======
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
render();
