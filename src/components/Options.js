import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}> Remove All </button>
    {props.options.length === 0 && <p> Please add an option to get started! </p>}
      {
        //this.props.options.map((option) => <p key={option}> {option} </p>)
        props.options.map((option) => (
          <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
        ))
      }
    </div>
  );

  
  // class Options extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.props.handleDeleteOptions}> Remove All </button>
  //         {
  //           //this.props.options.map((option) => <p key={option}> {option} </p>)
  //           this.props.options.map((option) => <Option key={option} optionText={option} />)
  //         }
  //       </div>
  //     )
  //   }
  // }
  
export default Options;