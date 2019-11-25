import React from 'react';
import Button from '../../Button'

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state={
            valor:0
        }
    }
    soma=() => {
        this.setState((prevState)=>{
            return{
                valor:prevState.valor +1
            }
        })
    }
    menos=() => {
        this.setState((prevState)=>{
            return{
                valor:prevState.valor -1
            }
        })
    }    

    render() {

    return(
        <div>
            <Button 
            onClick={this.soma}
            classe="button-fin"
            >+1</Button>
            {this.state.valor}
            <Button 
            onClick={this.menos}
            classe="button-fin-menos"
            >-1</Button>
        </div>
    )
}
}


export default Contador