import React, { Component } from 'react';
import './App.css';
import SocialCategory from './SocialCategory';
import facebook from './img/facebook.png';
import spotify from './img/spotify.png';
import instagram from './img/instagram.png';
import soundcloud from './img/soundcloud.png';
import youtube from './img/youtube.png';
import github from './img/github.png';
import play from './img/google-play.png';
import stack from './img/stack-overflow.png';
import linkedin from './img/linkedin.png';
import steam from './img/steam.png';
import esea from './img/esea.png';
import faceit from './img/faceit.png';

const isMobile = {
	Android: () => navigator.userAgent.match(/Android/i),
	BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
	iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
	Opera: () => navigator.userAgent.match(/Opera Mini/i),
	Windows: () => navigator.userAgent.match(/IEMobile/i),
	any: () => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
};

const social = [{
	name: 'facebook',
	logo: facebook,
	link: 'https://facebook.com/hermanj'
}, {
	name: 'spotify user',
	logo: spotify,
	link: 'https://open.spotify.com/user/hermanj'
}, {
	name: 'linkedin',
	logo: linkedin,
	link: 'https://www.linkedin.com/in/h3rmanj/'
}];

const media = [{
	name: 'instagram',
	logo: instagram,
	link: 'https://www.instagram.com/h3rmanj/'
}, {
	name: 'soundcloud',
	logo: soundcloud,
	link: 'https://soundcloud.com/herman-jensen'
}, {
	name: 'youtube',
	logo: youtube,
	link: 'https://www.youtube.com/channel/UClrcitAuRfXmrSS_NYKE-4w'
}, {
	name: 'spotify artist',
	logo: spotify,
	link: 'https://open.spotify.com/artist/4HvVi9LmVY9lqPShLwGur9'
}];

const developer = [{
	name: 'github',
	logo: github,
	link: 'https://github.com/h3rmanj'
}, {
	name: 'play store',
	logo: play,
	link: 'https://play.google.com/store/apps/developer?id=Herman%20Inc.'
}, {
	name: 'stack overflow',
	logo: stack,
	link: 'http://stackoverflow.com/users/1320997/h3rmanj'
}];

const gaming = [{
	name: 'steam',
	logo: steam,
	link: 'http://steamcommunity.com/id/h3rmanj'
}, {
	name: 'esea',
	logo: esea,
	link: 'https://play.esea.net/users/756185'
}, {
	name: 'faceit',
	logo: faceit,
	link: 'https://www.faceit.com/players/--mV--'
}];

export default () =>
	<div className="App">
		<div className={isMobile.any() ? "SocialMobile" : "Social"}>
			<SocialCategory name="SOCIAL" links={social} mobile={isMobile.any()} />
			<SocialCategory name="MEDIA" links={media} mobile={isMobile.any()} />
			<SocialCategory name="DEVELOPING" links={developer} mobile={isMobile.any()} />
			<SocialCategory name="GAMING" links={gaming} mobile={isMobile.any()} />
		</div>
	</div>;
