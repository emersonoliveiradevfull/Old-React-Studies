import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Cards from "../Cards/cards";
import CardActions from '../../actions/CardActions'

import InputEditable from './../InputEditable/inputEditable'

import {connect} from 'react-redux'

import { DragSource, DropTarget } from 'react-dnd'
import * as Types from './../../constants/Types'


class Panel extends Component {
  constructor(props) {
    super(props)

    this.handleCreateCard = this.handleCreateCard.bind(this)
  }

  static propTypes = {
    createCard: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  }

  handleCreateCard() {
    this.props.createCard()
  }


  render() {
    return (
      this.props.connectDragPreview (
        this.props.connectDropTarget (
          <div className="col-md-3">
            {this.props.connectDragSource(
              <div className="panel panel-default">
                <div className="panel-heading">
                  <InputEditable id={this.props.panel.id}
                                 edit={this.props.panel.edit}
                                 text={this.props.panel.text}
                                 clickToEdit={this.props.editPanel}
                                 editComponent={this.props.editPanel}
                                 deleteComponent={this.props.deletePanel}
                  />
                </div>
                <div className="panel-body">
                  <Cards cards={this.props.cards}
                         clickToEdit={this.props.editCard}
                         editCard={this.props.editCard}
                         deleteCard={this.props.deleteCard}
                  />
                </div>
                <div className="panel-footer">
                  <button type="button" className="btn btn-primary" onClick={this.handleCreateCard}>
                    <i className="ion-plus-round"></i> Card
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      )
    )
  }
}

const mapToStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapToDispatchToProps = (dispatch) => {
  return {
    createCard: () => dispatch(CardActions.createCard("New tesk")),
    editCard: (id, text) => {
      const edited = {id, edit: true}

      if (!text) {
        edited.edit = true
      } else {
        edited.edit = false
        edited.text = text
      }

      dispatch(CardActions.editCard(edited))
    },
    deleteCard: (id) => dispatch(CardActions.deleteCard(id))
  }
}

// Drag and Drop
const dragAndDropSrc = {
  beginDrag(props) {
    return {id: props.panel.id}
  }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
})

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
})

const panelHoverTarget = {
  hover(props, monitor) {
    const { id } = props.panel
    const monitorProps = monitor.getItem()
    const monitorType = monitor.getItemType()
    const monitorId = monitorProps.id

    if (id !== monitorId) {
      return props.movePanel(id, monitorId)
    }
  }
}

export default connect(mapToStateToProps, mapToDispatchToProps)(
  DragSource(Types.PANEL, dragAndDropSrc, collect)(
    DropTarget(Types.PANEL, panelHoverTarget, collectTarget)(Panel)
  )
)