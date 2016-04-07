/**
 * Created by mangubu on 04/04/2016.
 */
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {typed:''};
    }
    onChange(event) {
        this.setState({typed: event.target.value});
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange.bind(this)}/>
                <br/>
                You typed: <code>{this.state.typed}</code>
            </div>
        );
    }
}
