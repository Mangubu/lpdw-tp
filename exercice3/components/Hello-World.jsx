/**
 * Created by mangubu on 04/04/2016.
 */
import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h1>Hello, {this.props.name} !</h1>);
    }
}
