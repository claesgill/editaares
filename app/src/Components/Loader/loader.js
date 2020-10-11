import React, { Component } from 'react'

class Loader extends Component {
    render() {
        return (
            <div>
                { this.props.active ? <h1>This is a future loader</h1> : null}
            </div>
        )
    }
}

export default Loader