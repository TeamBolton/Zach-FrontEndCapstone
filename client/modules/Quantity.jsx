import React from 'react';
import styled from 'styled-components'


const NumInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border-width: .5px;
`

const PlusMinus = styled.input`
  border-radius: 100%;
  border-width: .5px;
  background-color: white;
  margin: 5px;
`


class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }

    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPlus() {
    this.setState({number: this.state.number += 1})
  }

  onMinus() {
    if(this.state.number > 1) {
      this.setState({number: this.state.number -= 1})
    }
  }

  onChange(e) {
    console.log(typeof 1);
    console.log(typeof e.target.value);
    if (e.target.value > 0) {
      this.setState({number: parseInt(e.target.value)});
    }
  }

  render () {
    return (
      <div>
        <PlusMinus type="button" value="-" onClick={this.onMinus}/><NumInput onChange={this.onChange} type="text" value={this.state.number}/><PlusMinus type="button" value="+" onClick={this.onPlus}/>
      </div>
    )
  }
}



export default Quantity;