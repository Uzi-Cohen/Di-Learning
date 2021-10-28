function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Card = ({ name, email, id }) => {

  return (
    React.createElement("div", { className: "tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5", id: "img-frame" }, /*#__PURE__*/
    React.createElement("img", { alt: "Robots", src: `https://robohash.org/${id}?size=200x200` }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, name), /*#__PURE__*/
    React.createElement("p", null, email))));




};

const CardList = ({ robots }) => {

  return (
    React.createElement("div", null,

    robots.map((user, i) => {
      return (
        React.createElement(Card, {
          key: robots[i].id,
          id: robots[i].id,
          name: robots[i].name,
          email: robots[i].email }));


    })));




};

const Scroll = props => {

  return (

    React.createElement("div", { style:
      {
        overflowY: 'scroll',
        height: 'calc(100vh - 187.32px)' } },

    props.children));





};

const SearchBox = ({ searchField, searchChange }) => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "pa2" }, /*#__PURE__*/
    React.createElement("input", {
      className: "pa3 ba b--green bg-lightest-blue",
      type: "search",
      placeholder: "search robots",
      onChange: searchChange })));





};

class App extends React.Component {
  constructor() {
    super();_defineProperty(this, "onSearchChange",












    event => {
      this.setState({ searchfield: event.target.value });
    });this.state = { robots: [], searchfield: '' };}componentDidMount() {fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState({ robots: users });});}

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ?
    React.createElement("h1", null, "Loading") :

    React.createElement("div", { className: "tc" },
    React.createElement("h1", { className: "f1" }, "RoboFriends"),
    React.createElement(SearchBox, { searchChange: this.onSearchChange }),
    React.createElement(Scroll, null,
    React.createElement(CardList, { robots: filteredRobots })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
