const React = require('react');
const propTypes = require('prop-types');
const createClass = require('create-react-class');
React.createClass = createClass;
React.PropTypes = propTypes;
const App = require('./index').default;

export default App;