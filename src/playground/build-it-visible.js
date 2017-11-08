const appRoot = document.getElementById('app');
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div id="app">
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see.</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
