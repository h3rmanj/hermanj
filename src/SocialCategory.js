import React, { Component } from 'react';
import SocialLink from './SocialLink';

class SocialCategory extends Component
{
    render()
    {
        return (
            <div className={this.props.mobile ? "SocialCategory Mobile" : "SocialCategory"}>
                {this.props.mobile ? (
                    <span className="SocialCategory-name Mobile">
                        {this.props.name}
                    </span>
                ) : null}
                <div className={this.props.mobile ? "Social-links Mobile" : "Social-links"}>
                    {this.props.links.map(item => (
                        <SocialLink key={item.name} item={item} mobile={this.props.mobile} />
                    ))}
                </div>
                {!this.props.mobile ? (
                    <span className="SocialCategory-name">
                        {this.props.name}
                    </span>
                ) : null}
            </div>
        );
    }
}

export default SocialCategory;