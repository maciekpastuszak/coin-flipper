import React, { Component } from 'react'

export default class Coin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const orzel = 'https://www.katalogmonet.pl/images/kaminski/1990_prz_120.gif';
        const reszka = 'https://static.myvimu.com/photo/15/55371523_m.jpg';
        this.props = [orzel, reszka]
        return (
            <div>
                <section>{this.props.orzel}</section>
            </div>
        )
    }
}
