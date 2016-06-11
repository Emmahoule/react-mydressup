import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import CollageOutfitItem from './CollageOutfitItem';
import { DropTarget, DragDropContext } from 'react-dnd';

const styles = {
  width: "320",
  height: "512"
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class CollageOutfit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zIndex:0,
      boxes: this.props.listItems
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.listItems != this.state.boxes) {
      this.setState({boxes: newProps.listItems});
    }
  }

  moveBox(id, nextleft, nexttop, img) {
    this.setState(update(this.state, {
      boxes: {
        [id]: {
          $merge: {
            left: nextleft,
            top: nexttop
          }
        }
      }
    }));
    this.props.onUpdateItem(this.props.listItems, id, "left", nextleft);
    this.props.onUpdateItem(this.props.listItems, id, "top", nexttop);
  }

  incrementZindex(e) {
    let zIndex = this.state.zIndex;
    let newZIndex = zIndex +1;
    let id = e.target.getAttribute("data-id");
    this.setState({
      zIndex: newZIndex
    });
    this.props.onUpdateItem(this.props.listItems, id, "zIndex", newZIndex);
  }

  render() {
    const { connectDropTarget, listItems, onClickItem, onUpdateItem } = this.props;
    const { boxes} = this.state;
    
    if (Object.keys(listItems).length!==0){
      var isListItem = true;
    }else {
      var isListItem = false;
    }

    return connectDropTarget(
      <div style={styles} className="collage-outfit" id="collage-outfit">
      {!isListItem &&
        <div className="collage-outfit-guidelines">
         <p><span className="c-main">Sélectionnez un vêtement</span> dans la liste pour l'ajouter à votre tenue. <span className="c-main">Cliquez-glissez</span> vos vêtements pour créer votre tenue. <span className="c-main">Double cliquez sur l'icon</span> pour redimensionner vos vêtements. </p>
          <img src="/html/src/img/d&d_exemple.png"/>
        </div>
      }
      {isListItem && 
        <div>
        {Object.keys(boxes).map(key => {
          const { left, top, img } = boxes[key];
          return (
            <div key={key} onClick={this.incrementZindex.bind(this)} onDragEnd={this.incrementZindex.bind(this)}>
            <CollageOutfitItem
                 id={key}
                 left={left}
                 top={top}
                 zIndex={this.state.zIndex}
                 listItems={listItems}
                 onUpdateItem={onUpdateItem}>
              {img}
            </CollageOutfitItem>
            </div>
          );
        })}
        </div>
        }
      </div>
      
    );
  }
}

CollageOutfit.propTypes = {
    connectDropTarget: PropTypes.func.isRequired
};


export default DropTarget('box', boxTarget, collect)(CollageOutfit);
