import React, { Component } from 'react'
import oading from './loading.gif'
export class Loading extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={oading} alt='loading'/>
            </div>
        )
    }
}

export default Loading
