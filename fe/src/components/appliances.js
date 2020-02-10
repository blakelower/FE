import React, { Component } from 'react'


class appliances extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "RCA RFR321-FR320/8 IGLOO Mini Refrigerator, 3.2 Cu Ft Fridge, Orange",
            img: "https://images-na.ssl-images-amazon.com/images/I/71YvJ7GxZ4L._SL1500_.jpg",
            price: "$10 a night"
          },
          {
            name: "Nostalgia BSET100BC Retro 3-in-1 Breakfast Station Coffeemaker, Griddle, Toaster Oven, Makes 4 Cups of Coffee, 2 Slice, Bisque",
            img: "https://images-na.ssl-images-amazon.com/images/I/910sCIFCtmL._SL1500_.jpg",
            price: "$30 a night"
          },
          {
            name: "Hamilton Beach Breakfast",
            img: "https://images-na.ssl-images-amazon.com/images/I/811PVXncQVL._SL1500_.jpg",
            price: "$30 a night"
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
 
export default appliances;