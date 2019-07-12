import React, {Component} from 'react'
import './house.css'


class House extends Component{



  render(){
    let house = this.props.house ? this.props.house : null
    return(
      <div id="house-display">
       {house ? house.name : null}
       {house ? house.address : null}
       {house ? house.city : null}
       {house ? house.state : null}

       
        <button onClick={() => this.props.delete(this.props.house.id)}>delete</button>
      </div>
    )
  }
}

export default House