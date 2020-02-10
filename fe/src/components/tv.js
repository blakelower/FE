import React, { Component } from 'react'


class Tv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "TCL 32S327 32-Inch 1080p Roku Smart LED TV",
            img: "https://images-na.ssl-images-amazon.com/images/I/71Ut6ZxFbpL._SL1500_.jpg",
            price: "$80 a night"
          },
          {
            name: "Roku Express HD Streaming Media Player 2019",
            img: "https://images-na.ssl-images-amazon.com/images/I/81s9HTg8KPL._SL1500_.jpg",
            price: "$50 a night"
          },
          {
            name: "Anker Nebula Soundbar – Fire TV Edition, Fire TV 4K built-in, 4K HDR Support, 2.1 Channel, Built-In Subwoofers, Included Voice Remote with Alexa, Black",
            img: "https://images-na.ssl-images-amazon.com/images/I/31SkEPfqK2L.jpg",
            price: "$40 a night"
          },
      ],
    }
  }
 
 
  renderUsers(user) {
    return (
      <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center flex flex-wrap">
        <img src={user.img} alt={user.name} className="db"/>
        <div className="pa2 bt b--black-20">
        <h4 className="f6 db link dark-blue hover-blue">Name: {user.name}</h4>
        <h4 className="f5 mv0">Price: {user.price}</h4>
      </div>
      </div>
    )
  }
 
  render() {
    return <div>{this.state.users.map(user => this.renderUsers(user))}</div>
  }
}
 
export default Tv;