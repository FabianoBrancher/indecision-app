'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
<<<<<<< HEAD
    _this.state = {
      options: []
=======
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
>>>>>>> refs/remotes/origin/master
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
<<<<<<< HEAD
      this.setState(function () {
        return {
          options: []
        };
=======
      // this.setState(() => {
      //   return {
      //     options: []
      //   };
      // });
      this.setState(function () {
        return { options: [] };
>>>>>>> refs/remotes/origin/master
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

<<<<<<< HEAD
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
=======
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat([option])
      //   };
      // });
      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {

      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.filter((option) => {
      //       return optionToRemove !== option;
      //     })
      //   }
      // });
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
>>>>>>> refs/remotes/origin/master
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
<<<<<<< HEAD
      var title = 'Indecision';
=======
>>>>>>> refs/remotes/origin/master
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
<<<<<<< HEAD
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
=======
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
>>>>>>> refs/remotes/origin/master
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

<<<<<<< HEAD
var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'Remove All'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);
=======
IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' ',
      props.title,
      ' '
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      ' ',
      props.subtitle,
      ' '
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> {this.props.title} </h1>
//         <h2> {this.props.subtitle} </h2>
//       </div>
//     )
//   }
// }

//stateless functional component
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

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

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      ' Remove All '
    ),

    //this.props.options.map((option) => <p key={option}> {option} </p>)
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
    })
  );
};

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

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     )
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);
>>>>>>> refs/remotes/origin/master

  function AddOption(props) {
    _classCallCheck(this, AddOption);

<<<<<<< HEAD
    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    _this6.state = {
      error: undefined
    };
    return _this6;
=======
    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
>>>>>>> refs/remotes/origin/master
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

<<<<<<< HEAD
=======
      // this.setState(() => {
      //   return {
      //     error: error // identical to only writing: error
      //   };
      // });
>>>>>>> refs/remotes/origin/master
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
<<<<<<< HEAD
          React.createElement('input', { type: 'text', name: 'option' }),
=======
          React.createElement('input', { type: 'text', name: 'option', placeholder: 'Type option here' }),
>>>>>>> refs/remotes/origin/master
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

<<<<<<< HEAD
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
=======
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devils den', 'Second District'] }), document.getElementById('app'));
>>>>>>> refs/remotes/origin/master
