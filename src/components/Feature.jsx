import React from 'react';

export default class Feature extends React.Component {
    render(){
        return(
            <p>{this.props.name}</p>
        );
    }
}