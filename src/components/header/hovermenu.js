var HoverTest = React.createClass({ displayName: "HoverTest",
  getInitialState: function () {
    return {
      hover: false };

  },
  hoverOn: function () {
    this.setState({ hover: true });
  },
  hoverOff: function () {
    this.setState({ hover: false });
  },
  render: function () {
    return (
      React.createElement("i", {
        className: this.state.hover ? "fa fa-heart" : "fa fa-heart-o",
        onMouseEnter: this.hoverOn,
        onMouseLeave: this.hoverOff },

      " ", " My class is: ", this.state.hover ? "fa-heart" : "fa-heart-o"));


  } });


ReactDOM.render(React.createElement(HoverTest, { name: "World" }), document.getElementById('container'));