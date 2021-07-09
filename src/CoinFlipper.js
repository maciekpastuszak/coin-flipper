import React, { Component } from 'react'
import Coin from './Coin.js'

export default class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: 'orzel', imgSrc: "https://www.katalogmonet.pl/images/kaminski/1990_prz_120.gif"},
            {side: 'reszka', imgSrc: "https://static.myvimu.com/photo/15/55371523_m.jpg"}
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

    }
    handleClick(e) {
this.flipCoin();
    }
    render() { 
        return (
            <div className="CoinFlipper">
                <h2>Rzućmy monetą!</h2>
                <p> Na {this.state.nFlips} rzutów, wyrzuciłeś {this.state.nOrzel} orłów i {this.state.nReszka} reszek</p>
                <button onClick={this.handleClick}>Rzuć monetą!</button>
            </div>
        )
    }
}
