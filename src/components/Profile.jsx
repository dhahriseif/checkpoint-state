import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "John Sandoval",
      bio: "zjaejljcompound population trunk announced handle add wrapped leaf agree identity corn pale bar wagon rain minute deal box numeral screen indicate farm mad grown: ",
      profession: "marchand",
      bol: false,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ bol: !this.state.bol });
          }}
        >
          {" "}
          afficher{" "}
        </button>
        {this.state.bol && (
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrRqFW33ybg9UfNbOqAxRNo855kMsT73Jg_NfWb0CvMjHGTBrOhm3Y5u9-eBJBNOSBuI&usqp=CAU"
              alt=""
            />
            <h1>
              Fullname : {this.state.fullname}
            </h1>
            <h3>Bio :
              {this.state.bio}
            </h3>
            <h2>
              Profession : {this.state.profession}
            </h2>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const intervalID = setInterval(() => {

    }, 1000);
  }
}
