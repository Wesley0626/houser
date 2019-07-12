import React, {Component} from 'react'

class StepOne extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0,
      toDashboard: false
    }
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  addHouse = () => {
    axios.post("/house", {
      name: this.state.name, 
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    }).then(res => {
      this.setState({name: '', address: '', city: '', state: '', zipcode: 0, toDashboard: true})

      this.props.history.push('/')
    })
  }

  render(){
    return(
      <div>
         <div>
          <p>Property Name</p>
          <input placeholer = 'Property Name' value = {this.state.name} name = "name" onChange={this.handleChange} />
          <p>Address</p>
          <input placeholer = 'Address' value = {this.state.address} name = "address" onChange={this.handleChange} />
          <div>
            <div>
              <p>City</p>
              <input placeholer = 'City' value = {this.state.city} name = "city" onChange={this.handleChange} />
            </div>
            <div>
              <p>State</p>
              <input placeholer = 'State' value = {this.state.state} name = "state" onChange={this.handleChange} />
            </div>
            <div>
              <p>Zip</p>
              <input placeholer = 'Zip' value = {this.state.zipcode} name = "zipcode" onChange={this.handleChange} />
            </div>
            
          </div>
        </div>
        <div>
          <button onClick={() => this.addHouse()}>Complete</button>
        </div>
      </div>
    )
  }


}