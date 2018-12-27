import React, { Component } from 'react';

import { DragSource } from 'react-dnd';

import './card.css';

const cardSource = {
  beginDrag(props) {
    return props.venue;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    props.handleDrop(props.venue.name);
    props.addFavorite(props.venue);
    return '';
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Card extends Component {
  render() {
    const { isDragging, connectDragSource, venue } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="card" style={{ opacity }}>
        <h4>{venue.location.city}</h4>
        <h3>{venue.name}</h3>
      </div>

    )
  }
};

export default DragSource('item', cardSource, collect)(Card);