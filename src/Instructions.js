import React, { Component } from 'react';
import emoji from './emoji.png'

export class Instructions extends Component {

    render() {
        return (
            <div className="instructions">
                <img alt="alien emoji" src={emoji} />
                <p>Decentralization empowers individuals to control their own financial destiny.</p>
            </div>
        )
    }

}