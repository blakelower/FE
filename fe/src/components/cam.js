import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "Xiaomi Mi 4K Action Camera, 2.4” Touchscreen WiFi Sports Camera with Sony Image Sensor, 145° Wide Angle 4K/30fps 1080P/100fps Video Raw Image",
            img: "https://images-na.ssl-images-amazon.com/images/I/51IJqxt6eqL._SL1000_.jpg",
            price: "$80 a night"
          },
          {
            name: "Kodak PIXPRO Astro Zoom AZ652-BK 20MP Digital Camera with 65X Optical Zoom and 3",
            img: "https://images-na.ssl-images-amazon.com/images/I/71lURdZkOnL._SL1500_.jpg",
            price: "$90 a night"
          },
          {
            name: "SKB Cases 3i-2217-10PL iSeries Professional Camera Case, Black/Gray",
            img: "https://images-na.ssl-images-amazon.com/images/I/81IW5y2H35L._SL1500_.jpg",
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
 
export default App