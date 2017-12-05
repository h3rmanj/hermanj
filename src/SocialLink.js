import React from 'react';

export default ({item, mobile}) =>
	<a
		href={item.link}
		target="_blank"
		className={mobile ? "Social-link Mobile" : "Social-link"}>

		<img
			src={item.logo}
			className={mobile ? "Social-icon Mobile" : "Social-icon"}
			alt={item.name} />
	</a>;
