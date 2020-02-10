import React, { Component } from 'react'


class audio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "XLEADER SoundAngel (2 Gen) 5W Touch Bluetooth Speaker with Waterproof Case, 15h Music, Louder Crystal HD Sound, Premium Mini Portable Bluetooth Speaker for iPhone iPad Tablet Shower Gift, Rose Gold",
            img: "https://images-na.ssl-images-amazon.com/images/I/61HywtJRbyL._SL1500_.jpg",
            price: "$30 a night"
          },
          {
            name: "H2O Audio Stream 2 100% Waterproof MP3 Music Player with Bluetooth and Underwater Headphones for Swimming Laps, Watersports, Short Cord, 8GB",
            img: "https://images-na.ssl-images-amazon.com/images/I/61dvQCNMTZL._SL1500_.jpg",
            price: "$30 a night"
          },
          {
            name: "Innovative Technology VSC-550BT-TQ Victrola Vintage 3-Speed Bluetooth Suitcase Turntable with Speakers, Turquoise",
            img: "https://images-na.ssl-images-amazon.com/images/I/61FSnPYsXzL._SL1200_.jpg",
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
 
export default audio;