import React, {Component} from 'react'

class StepTwo extends Component{

  constructor(){
    super()
    this.state = {
      imageurl: ''
    }
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  addHouse = () => {
    axios.post("/house", {
     
    }).then(res => {
      this.setState({name: '', address: '', city: '', state: '', zipcode: 0, toDashboard: true})

      this.props.history.push('/')
    })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}