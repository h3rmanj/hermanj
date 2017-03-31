import React, { Component } from 'react';

class SocialLink extends Component
{
    render()
    {
        return (
            <a href={this.props.item.link} target="_blank" className={this.props.mobile ? "Social-link Mobile" : "Social-link"}>
                <img src={this.props.item.logo} className={this.props.mobile ? "Social-icon Mobile" : "Social-icon"} alt={this.props.item.name} />
            </a>
        );
    }
}

export default SocialLink;