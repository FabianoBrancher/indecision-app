import React from 'react';

//stateless functional component
const Action = (props) => (
  <div>
    <button 
      className="big-button"  
      disabled={!props.hasOptions} 
      onClick={props.handlePick} > 
        What should I do?
    </button>
  </div>
);
  
  // class Action extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}> 
  //           What should I do? 
  //         </button>
  //       </div>
  //     )
  //   }
  // }

  export default Action;