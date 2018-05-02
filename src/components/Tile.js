import React, {Component} from 'react'
import './Tile.css'

class Tile extends Component {
  render(props){
    return (
      <div className="card hoverable">
        <div className="card-content">
          <img className="album" src={require(`../../public/images/${this.props.id}.jpg`)} onClick={this.props.handleClick} id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default Tile