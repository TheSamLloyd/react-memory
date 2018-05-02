import React from 'react'
import Tile from './Tile.js'

const TileGrid = (props) => (
  <div>
    <div className="row">
      {props.idList.slice(0,4).map((id)=>(
        <div className="col s3" key={id}>
          <Tile id={id} handleClick={props.handleClick}/>
        </div>
      ))}
    </div>
    <div className="row">
      {props.idList.slice(4, 8).map((id) => (
        <div className="col s3" key={id}>
          <Tile id={id} handleClick={props.handleClick}/>
        </div>
      ))}
    </div>
    <div className="row">
      {props.idList.slice(8, 12).map((id) => (
        <div className="col s3" key={id}>
          <Tile id={id} handleClick={props.handleClick}/>
        </div>
      ))}
    </div>
  </div>
)

export default TileGrid