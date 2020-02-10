import React, { Component } from 'react'


class Tv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
          {
            name: "Acer Chromebook R 11 Convertible Laptop, Celeron N3060, 11.6",
            img: "https://images-na.ssl-images-amazon.com/images/I/71x9FV4ENgL._SL1500_.jpg",
            price: "$60 a night"
          },
          {
            name: "Lenovo Ideapad 330 15.6 Anti Glared HD Premium Business Laptop (AMD A9-9425 up to 3.7 GHz, 8GB DDR4 Memory, 256GB SSD, AMD Radeon R5 Graphic, DVD-RW, HDMI, Windows 10 Home) - Purple",
            img: "https://images-na.ssl-images-amazon.com/images/I/51u%2ButC41iL._SL1500_.jpg",
            price: "$50 a night"
          },
          {
            name: "Acer Spin 3 Convertible Laptop, 14 inches Full HD IPS Touch, 8th Gen Intel Core i7-8565U, 16GB DDR4, 512GB PCIe NVMe SSD, Backlit KB, Fingerprint Reader, Rechargeable Active Stylus, SP314-53N-77AJ",
            img: "https://images-na.ssl-images-amazon.com/images/I/81H9y1pPW6L._SL1500_.jpg",
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