import React, { Component } from 'react'

class PurchaseDetail extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`${className} purchase-detial`}>
        Purchase detail goes here
      </div>
    )
  }
}

export default PurchaseDetail;