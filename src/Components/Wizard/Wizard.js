import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


class Wizard extends Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zipcode: 0,
  //     toDashboard: false
  //   }
  // }

  // handleChange = e => {
  //   let {name, value} = e.target
  //   this.setState({[name]: value})
  // }

  // addHouse = () => {
  //   axios.post("/house", {
  //     name: this.state.name, 
  //     address: this.state.address,
  //     city: this.state.city,
  //     state: this.state.state,
  //     zipcode: this.state.zipcode
  //   }).then(res => {
  //     this.setState({name: '', address: '', city: '', state: '', zipcode: 0, toDashboard: true})

  //     this.props.history.push('/')
  //   })
  // }

  render(){
    return(
      <div>
        <div>
          <h1>Add New Listing</h1>
         <Link to='/'>
          <button>Cancel</button>
         </Link>
        </div>
       
      </div>
    )
  }
}

export default Wizard