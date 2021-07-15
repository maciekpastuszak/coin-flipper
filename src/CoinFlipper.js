import React, { Component } from 'react'
import Coin from './Coin.js'
import {choice} from "./helpers.js"

export default class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: 'orzel', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'reszka', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    };
    constructor(props) {
    super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nOrzel: 0,
            nReszka: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
const newCoin = choice(this.props.coins);
this.setState(st => {
    let newState = {
        ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1
    }
    if(newCoin.side === 'orzel'){
        newState.nOrzel += 1;
    } else {
        newState.nReszka += 1;
    }
    return newState;
})
    }
    handleClick(e) {
    this.flipCoin();
    }
    render() { 
        return (
            <div className="CoinFlipper">
                <h2>Rzućmy monetą!</h2>
                <button onClick={this.handleClick}>Rzuć monetą!</button>
                <p> Na {this.state.nFlips} rzutów, wyrzuciłeś {this.state.nOrzel} orłów i {this.state.nReszka} reszek</p>
            </div>
        )
    }
}
