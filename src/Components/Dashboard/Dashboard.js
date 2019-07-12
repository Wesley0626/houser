import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'
import './dashboard.css'


class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      houses: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  } 
  
  componentDidMount(){
    axios.get("/house").then(res => {
      this.setState({houses: res.data})
    })
  }
  
  deleteHouse = (id) => {
    console.log(id)
    axios.delete(`/house/${id}`).then(
      res => {
        this.componentDidMount()
      }
    )
  }

  render(){
    return(
      <div id="green">
      <div id="backness">
        <div id="dashboard-head">
          <h1 id="dashboard-title"> Dashboard</h1>
          <Link id="dashboard-button" to='/wizard'>
            <button>Add New Property</button>
          </Link>
        </div>
        {this.state.houses.map( house => {
          if(house.name){
            return(
              <House 
              key={house.id}
              house={house}
              update={this.componentDidMount}
              delete={this.deleteHouse}
              />
            )
          }
        })}
      </div>
      </div>
    )
  }
}

export default Dashboard