import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';
var ResizableBox = require('react-resizable').ResizableBox;
var Resizable = require('react-resizable').Resizable;

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

function collect(connect, monitor) {
  return {
   connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default class Box extends Component {
  constructor(){
    super();
    this.state = {
      zIndexTop: 0,
      width: 0,
      height: 0
    }
  }
  componentWillMount(){
    var theId = this.props.id;
    var width = this.props.listItems[theId].width;
    var height = this.props.listItems[theId].height;
    this.setState({width: width, height: height});
  }

  onResize(event, {element, size}) {
    this.setState({width: size.width, height: size.height});
    this.props.onUpdateItem(this.props.listItems, this.props.id, "width", size.width);
    this.props.onUpdateItem(this.props.listItems, this.props.id, "height", size.height);
  };

  render() {
    const { left, top, zIndex, connectDragSource, isDragging, children, listItems, id, onUpdateItem } = this.props;
    if (isDragging) {
      return null;
    }
    return connectDragSource(
      <div style={{ left, top, zIndex: this.state.zIndexTop}} onClick={(e)=>this.setState({zIndexTop:this.props.zIndex})} onDragEnd={(e)=>this.setState({zIndexTop:this.props.zIndex})} className={"collage-outfit-item"}>
        <Resizable 
          lockAspectRatio={true}
          width={this.state.width}
          height={this.state.height}
          onResize={this.onResize.bind(this)}
          className="drag-box-item-resizible">
            <div style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
              <img src={children} className="collage-outfit-item-img" data-id={id}/>
            </div>
        </Resizable>
      </div>
    );
  }
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
