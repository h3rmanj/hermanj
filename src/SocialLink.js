import React, { Component } from 'react';

class SocialLink extends Component
{
    render()
    {
        return (
            <a href={this.props.item.link} target="_blank" className="Social-link">
                <img src={this.props.item.logo} className="Social-icon" alt={this.props.item.name} />
            </a>
        );
    }
}

export default SocialLink;