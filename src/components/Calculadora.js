import React from 'react'


function Button(props) {
  return (
    <div className="col-3" >
      <button className="btn btn-outline-secondary rounded p-2"
        style={{
          width: "65px",
          color: 'lightyellow',
          backgroundColor: 'gray',
        }}
        onClick={props.onClick}>
        {props.label}
      </button>
    </div >
  )
}


class Calculadora extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: null,
      value: null,
      resultado: null,
      operacao: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(num) {
    this.setState({
      value: ((this.state.value * 10) + num)
    })
  }

  somar = () => {
    if (this.state.resultado != null) {
      this.state.temp = this.state.resultado
    } else {
      this.state.temp = this.state.value
    }
    this.setState({
      value: null,
      operacao: '＋',
    })
  }

  subtrair = () => {
    if (this.state.resultado != null) {
      this.state.temp = this.state.resultado
    } else {
      this.state.temp = this.state.value
    }
    this.setState({
      value: null,
      operacao: '-',
    })
  }

  multiplicar = () => {
    if (this.state.resultado != null) {
      this.state.temp = this.state.resultado
    } else {
      this.state.temp = this.state.value
    }
    this.setState({
      value: null,
      operacao: '✕',
    })
  }

  dividir = () => {
    if (this.state.resultado != null) {
      this.state.temp = this.state.resultado
    } else {
      this.state.temp = this.state.value
    }
    this.setState({
      value: null,
      operacao: '÷',
    })
  }

  resultado = () => {
    if (this.state.operacao === "＋") {
      this.setState({
        resultado: this.state.temp + this.state.value
      })
    } else if (this.state.operacao === "-") {
      this.setState({
        resultado: this.state.temp - this.state.value
      })
    } else if (this.state.operacao === "✕") {
      this.setState({
        resultado: this.state.temp * this.state.value
      })
    } else if (this.state.operacao === "÷") {
      this.setState({
        resultado: this.state.temp / this.state.value
      })
    }

  }

  limpar = () => {
    this.setState({
      temp: null,
      value: null,
      operacao: null,
    })
  }

  render() {
    return (

      <div className="container rounded p-1 mt-4"
        style={{
          maxWidth: "400px",
          backgroundColor: 'black',
          color: 'white',
        }}>

        {/* VISOR */}
        <div className="row justify-content-center">
          <div className="visor col-12 rounded p-1 mt-3 "
            style={{
              maxWidth: "365px",
              height: "180px",
              border: "1px solid"
            }}>
            <div className="row m-2 justify-content-end">
              <h2 style={{
                height: "30px",
                color: "rgb(128, 255, 0)",
              }}
              >{this.state.temp}</h2>
            </div>
            <div className="row m-2 justify-content-end">
              <div className="col ">
                <h2>{this.state.operacao}</h2>
              </div>
              <div>
                <h2 style={{
                  height: "30px",
                  color: "rgb(255, 128, 0)"
                }}>{this.state.value}
                </h2>
              </div>
            </div>
            <hr style={{
              border: "1px solid",
              width: "330px"
            }} />
            <div className="row m-2 justify-content-end">
              <h3 style={{
                height: "30px",
                color: "rgb(128, 0, 255)"
              }}>
                {this.state.resultado}
              </h3>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* TECLADO */}
        <div className="teclado row col-12 rounded p-1 m-3 justify-content-center"
          style={{
            maxWidth: "365px",
            border: "1px solid",
          }}>

          <div className="row m-2">
            <Button label="C" onClick={() => this.limpar()} />
            <Button label="( )" />
            <Button label="％" />
            <Button label="➗" onClick={this.dividir} />
          </div>

          <div className="row m-2">
            <Button label="1" onClick={() => this.handleClick(1)} />
            <Button label="2" onClick={() => this.handleClick(2)} />
            <Button label="3" onClick={() => this.handleClick(3)} />
            <Button label="✕" onClick={this.multiplicar} />
          </div>

          <div className="row m-2">
            <Button label="4" onClick={() => this.handleClick(4)} />
            <Button label="5" onClick={() => this.handleClick(5)} />
            <Button label="6" onClick={() => this.handleClick(6)} />
            <Button label="➖" onClick={this.subtrair} />
          </div>

          <div className="row m-2">
            <Button label="7" onClick={() => this.handleClick(7)} />
            <Button label="8" onClick={() => this.handleClick(8)} />
            <Button label="9" onClick={() => this.handleClick(9)} />
            <Button label="＋" onClick={this.somar} />
          </div>

          <div className="row m-2">
            <Button label="." />
            <Button label="0" onClick={() => this.handleClick(0)} />
            <Button label="," />
            <Button label="＝" onClick={() => this.resultado()} />
          </div>

        </div>
      </div >

    )
  }
}

export default Calculadora