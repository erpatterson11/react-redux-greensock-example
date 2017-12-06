import React, { Component } from 'react'
import gsap from '../gsap/animations'


export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillEnter(cb) {
        gsap.show(this.card, cb)
    }

    handleClick() {
        console.log('clicked!')
        gsap.move(this.card)
    }

    componentWillLeave(cb) {
        gsap.hide(this.card, cb)
    }

    render() {
        return (
                <div className="card" ref={ref => this.card = ref}>
                    <p>This is a card!</p>
                    <div onClick={this.handleClick}>
                        Move!
                    </div>
                </div>
        )
    }
}