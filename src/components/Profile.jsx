import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "John Sandoval",
      bio: "zjaejljcompound population trunk announced handle add wrapped leaf agree identity corn pale bar wagon rain minute deal box numeral screen indicate farm mad grown: ",
      profession: "marchand",
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrRqFW33ybg9UfNbOqAxRNo855kMsT73Jg_NfWb0CvMjHGTBrOhm3Y5u9-eBJBNOSBuI&usqp=CAU"
          alt=""
        />
        
        <h1 className="a">Fullname :</h1>
        <h3 className="b">Bio :</h3>
        <h2 className="c">Profession :</h2>
        <h1 className="name">{this.state.fullname}</h1>
        <h3 className="bio">{this.state.bio}</h3>
        
        <h2 className="profession">{this.state.profession}</h2>
        <h1 className="counter"> {this.state.counter}s for the last mount</h1>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
}
