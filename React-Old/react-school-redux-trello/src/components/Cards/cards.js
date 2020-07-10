import React, { Component } from 'react'
import Card from "../Card/card";
import InputEditable from './../InputEditable/inputEditable'

class Cards extends Component {
  render() {
    const cards = this.props.cards.map(card => (
      <Card key= { card.id } >
        <InputEditable id={ card.id }
                       edit={ card.edit }
                       text={ card.text }
                       clickToEdit={ this.props.clickToEdit }
                       editComponent= { this.props.editCard }
                       deleteComponent= { this.props.deleteCard } />
      </Card>
    ))

    return (
      <ul>
        { cards }
      </ul>
    )
  }
}

export default Cards