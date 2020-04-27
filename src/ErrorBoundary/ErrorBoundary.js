import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, log) => {
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
   if (this.state.hasError) {
   return <h1>{this.state.errorMessage}</h1>
   }
  }
}

export default ErrorBoundary
