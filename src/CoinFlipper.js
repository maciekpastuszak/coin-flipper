import React, { Component } from 'react'
import Coin from './Coin.js'
import {choice} from "./helpers.js"

export default class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: 'orzel', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'reszka', imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
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
    return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nOrzel: st.nOrzel + (newCoin.side === 'orzel' ? 1 : 0),
        nReszka: st.nReszka + (newCoin.side === 'reszka' ? 1 : 0)
    }
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
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p> Na {this.state.nFlips} rzutów, wyrzuciłeś {this.state.nOrzel} orłów i {this.state.nReszka} reszek</p>
            </div>
        )
    }
}
