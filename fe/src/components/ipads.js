import React, { Component } from 'react'


class ipad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "New Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Space Gray (Latest Model)",
            img: "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._SL1500_.jpg",
            price: "$110 a night"
          },
          {
            name: "Natural Walnut Wood Phone Docking Station Hooks Key Holder Wallet Stand Watch Organizer Men Gift Husband Wife Anniversary Dad Birthday Nightstand Purse Father Graduation Male Travel Idea Gadgets Solid",
            img: "https://images-na.ssl-images-amazon.com/images/I/91ctvOFzXxL._SL1500_.jpg",
            price: "$10 a night"
          },
          {
            name: "Apple iPad mini FD531LL/A 16GB, Wi-Fi, (White/Silver) (Renewed)",
            img: "https://images-na.ssl-images-amazon.com/images/I/710KHZfU%2BRL._SL1500_.jpg",
            price: "$60 a night"
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
 
export default ipad;