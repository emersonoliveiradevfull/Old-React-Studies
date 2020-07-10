import React, { Component } from 'react'

import Panels from "../components/Panels";
import PanelActions from '../actions/PanelActions'

import { connect } from 'react-redux'
import './Home.css'

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Home extends Component{
  constructor(props) {
    super(props)

    this.handleCreatePanel = this.handleCreatePanel.bind(this)
  }

  handleCreatePanel() {
    this.props.createPanel()
  }

  render() {
    return (
      <di>
        <DndProvider backend={HTML5Backend}>
          <div col-xs-12>
            <button type="button" className="btn btn-primary" onClick={ this.handleCreatePanel }>
              <i className="ion-plus-round"></i> New Panel
            </button>
          </div>
          <Panels panels={ this.props.panels }
                  editPanel = { this.props.editPanel }
                  deletePanel = { this.props.deletePanel }
                  movePanel= { this.props.movePanel }
                  />
        </DndProvider>
      </di>
    )
  }
}

const mapToStateToProps = (state) => {
  return {
    panels: state.panels
  }
}

const mapToDispatchToProps = (dispatch) => {
  return {
    createPanel: () => dispatch(PanelActions.createPanel('It Works!')),
    editPanel: (id, text) => {
      const edited = { id }

      if (!text) {
        edited.edit = true
      } else {
        edited.edit = false
        edited.text = text
      }

      dispatch(PanelActions.editPanel(edited))
    },
    deletePanel: (id) => dispatch(PanelActions.deletePanel(id)),
    movePanel: (id, monitorId) => dispatch(PanelActions.move(id, monitorId))
  }
}

export default connect(mapToStateToProps, mapToDispatchToProps)(Home)
