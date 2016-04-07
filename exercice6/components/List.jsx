/**
 * Created by mangubu on 04/04/2016.
 */
import React from 'react';

export default class List extends React.Component {

    const todos = [
        {
            label: 'Faire la vaisselle',
            done: false
        },
        {
            label: 'Aller chercher le pain',
            done: false
        },
        {
            label:'Acheter des fleurs pour sa/son bien aimé(e)',
            done: true
        }
    ];

    var ListItemWrapper = React.createClass({
        render: function() {
            return <li>{this.props.todos.label.text}</li>;
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
