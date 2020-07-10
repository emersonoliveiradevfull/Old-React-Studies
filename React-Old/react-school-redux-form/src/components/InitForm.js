import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from  'react-redux'
import { getInitialFetch } from './../actions/index'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label htmlFor="">{ label }</label>
    <input {...input} placeholder={ label } type={ type } className="form-control"/>
    { touched
      && (error && <span className="text-danger">{ error }</span>) || (warning && <span className="text-warning">{ warning }</span>)
    }
  </div>
)

const validate = (values) => {
  const  errors = {}
  const { name } = values

  if (!name) {
    errors.name = 'Required'
  }

  return errors
}

const warn = (values) => {
  const warnings = {}
  const { name } = values

  if (name && name.toString().length <= 2) {
    warnings.name = 'To short'
  }

  return warnings
}

class InitForm extends Component {
  componentWillMount() {
    this.props.fetchInitial()
  }

  render() {
    //Component
    const { myClick, onChangeName } = this.props
      return (
        <form>
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <Field
              name="name"
              placeholder="Insert your name"
              type="text"
              component={ renderField }
              className="form-control"
              onChange={ onChangeName }
            />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={ (e) => myClick(e, this.props.initialValues) } >Send</button>
          </div>
        </form>

      )
    }
  }


const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitial: () => dispatch(getInitialFetch())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(reduxForm({
  form: 'InitForm',
  enableReinitialize: true,
  validate,
  warn
})(InitForm))