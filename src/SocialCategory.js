import React, { Component } from 'react';
import SocialLink from './SocialLink';

class SocialCategory extends Component
{
    render()
    {
        return (
            <div className="SocialCategory">
                <div className="Social-links">
                    {this.props.links.map(item => (
                        <SocialLink key={item.name} item={item} />
                    ))}
                </div>
                <span className="SocialCategory-name">
                    {this.props.name}
                </span>
            </div>
        );
    }
}

export default SocialCategory;