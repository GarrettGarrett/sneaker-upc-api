import React, { Component } from 'react'
import Quagga from 'quagga'

class Scanner extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 0, //640
            height: 0, //480
            facingMode: 'environment', // or user
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 0,
        decoder: {
          readers: ['code_128_reader'],
        },
        locate: true,
      },
      function(err) {
        if (err) {
          return console.log(err)
        }
        Quagga.start()
      },
    )
    Quagga.onDetected(this._onDetected)
    
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)

  }
  componentWillUnmount() {
    if (this.props.scanning == true){
        console.log("true")
        Quagga.stop();
      }
      console.log("here")
  }

  _onDetected = result => {
    this.props.onDetected(result)
  }

  

  render() {
    return <></>
  }
}

export default Scanner