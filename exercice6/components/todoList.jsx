/**
 * Created by mangubu on 04/04/2016.
 */
import React from 'react';

export default class App extends React.Component {

    var ListItemWrapper = React.createClass({
        render: function() {
            return <li>{this.props.data.text}</li>;
        }
    });
    var MyComponent = React.createClass({
        render: function() {
            return (
                <ul>
                    {this.props.results.map(function(result) {
                        return <ListItemWrapper key={result.id} data={result}/>;
                    })}
                </ul>
            );
        }
    });
}
