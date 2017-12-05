import React, { Component } from 'react';
import SocialLink from './SocialLink';

export default ({mobile, name, links}) =>
    <div className={mobile ? "SocialCategory Mobile" : "SocialCategory"}>
        {mobile ? (
            <span className="SocialCategory-name Mobile">
                {name}
            </span>
        ) : null}
        <div className={mobile ? "Social-links Mobile" : "Social-links"}>
            {links.map(item => (
                <SocialLink key={item.name} item={item} mobile={mobile} />
            ))}
        </div>
        {!mobile ? (
            <span className="SocialCategory-name">
                {name}
            </span>
        ) : null}
    </div>
