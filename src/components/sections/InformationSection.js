import React from 'react';

import Graph from '../shared/Graph';

export default class InformationSection extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      phone: '',
      email: '',
      password: '',
      phoneError: false,
      emailError: false,
      passwordError: false
    }
  }

  validateForm() {
    let phoneRegEx = /^(\+\d{2})?[26]\d{9}$/;
    let emailRegEx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // won't catch all errors but close enough
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let newState = {};
    newState['phoneError'] = !phoneRegEx.test( this.state.phone );
    newState['emailError'] = !emailRegEx.test( this.state.email );
    newState['passwordError'] = !passwordRegEx.test( this.state.password );

    this.setState( newState );
  }

  updateFormElement(property, event) {
    let newState = {};
    newState[ property ] = event.target.value
    this.setState(newState);
  }

  render() {
    return(
      <div>
        <h2>{ this.props.data.title }</h2>
        <div className='fl-row'>
          <div>
            <Graph graphText={ this.props.data.graphText } stats={ this.props.data.stats } />
          </div>
          <div>
            <div className='info-form'>
              <h3 className='info-form__heading'>
                { this.props.data.formText }
              </h3>
              <span className='info-form__subtext'>
                { this.props.data.subText || 'We work with ecosystem leaders, corporations and startups worldwide. How can we help you?'}
              </span>
              <div className='info-form__form-element-container'>
                <input 
                  className={ this.state.phoneError ? 'error' : '' } 
                  placeholder='Your Phone' 
                  value={ this.state.phone } 
                  onChange={ this.updateFormElement.bind(this, 'phone')}>
                </input>
                <input 
                  className={ this.state.emailError ? 'error' : '' } 
                  placeholder='Your Email' 
                  value={ this.state.email } 
                  onChange={ this.updateFormElement.bind(this, 'email')}>
                </input>
                <input 
                  type='password'
                  className={ this.state.passwordError ? 'error' : '' } 
                  placeholder='Password' 
                  value={ this.state.password } 
                  onChange={ this.updateFormElement.bind(this, 'password')}>
                </input>

                {/* ^^^^ I replaced what the data provides because it doesn't make sense */}
                {/* {
                  this.props.data.formLabels.map( (label, i) => (
                    <input key={i} placeholder={ label }></input>
                  ))
                } */}
                
                <button className='info-form__submit' onClick={ this.validateForm.bind( this ) }>{ this.props.data.buttonText }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}