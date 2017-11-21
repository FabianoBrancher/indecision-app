class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
<<<<<<< HEAD
    
=======
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
    this.state = {
      visibility: false
    };
  }
<<<<<<< HEAD

=======
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
<<<<<<< HEAD
    });    
  }
 
  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide Details' : 'Show Details'} </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see.</p>
=======
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
          </div>
        )}
      </div>
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// const appRoot = document.getElementById('app');
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div id="app">
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see.</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
=======
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
