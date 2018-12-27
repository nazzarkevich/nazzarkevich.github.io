import Target from './Target';

import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver()
  }
}

export default DropTarget('item', {}, collect)(Target);