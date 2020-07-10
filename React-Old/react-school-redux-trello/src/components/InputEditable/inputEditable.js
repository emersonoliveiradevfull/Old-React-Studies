import React, { Component } from 'react'

class inputEditable extends Component {
  constructor(props) {
    super(props)


    this.handleClickToEdit = this.handleClickToEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  renderEditable() {
    return (
      <div>
        <input type="text" className="form-control" defaultValue={ this.props.text }
               onBlur={ this.handleEdit } onKeyPress={ this.handleEdit }/>
      </div>
    )
  }

  handleClickToEdit() {
    this.props.clickToEdit(this.props.id)
  }

  handleEdit(event) {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return
    }
    const text = event.target.value
    if (text.trim().length) {
      this.props.editComponent(this.props.id, text)
    }
  }

  handleDelete() {
    this.props.deleteComponent(this.props.id)
  }

  renderText() {
    return (
      <div className="row">
        <div className="col-xs-10 no-padding">
          <input
            type="text"
            className="form-control"
            defaultValue={ this.props.text }
            readOnly
            onClick={ this.handleClickToEdit }
          />
        </div>
          <button className="btn btn-danger btn-delete col-xs-2" onClick={ this.handleDelete }>
            <i className="ion-trash-b"></i>
          </button>
        </div>
    )
  }

  render() {
    if (this.props.edit) {
      return this.renderEditable()
    }

    return  this.renderText()
  }
}

export default inputEditable