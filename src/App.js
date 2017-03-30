import React, { Component } from 'react';
import './App.css';
import SocialCategory from './SocialCategory';
import facebook from './img/facebook.png';
import reddit from './img/reddit.png';
import instagram from './img/instagram.png';
import soundcloud from './img/soundcloud.png';
import youtube from './img/youtube.png';
import github from './img/github.png';
import play from './img/google-play.png';
import stack from './img/stack-overflow.png';
import steam from './img/steam.png';
import esea from './img/esea.png';

class App extends Component
{
  render ()
  {
      let social = [{
          name: 'facebook',
          logo: facebook,
          link: 'https://facebook.com/hermanj'
      }, {
          name: 'reddit',
          logo: reddit,
          link: 'https://www.reddit.com/user/masculinusVaginus/'
      }];

      let media = [{
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
      }];

      let developer = [{
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

      let gaming = [{
          name: 'steam',
          logo: steam,
          link: 'http://steamcommunity.com/id/h3rmanj'
      }, {
          name: 'esea',
          logo: esea,
          link: 'https://play.esea.net/users/756185'
      }];

    return (
      <div className="App">
        <div className="Social">
            <SocialCategory name="SOCIAL" links={social} />
            <SocialCategory name="MEDIA" links={media} />
            <SocialCategory name="DEVELOPING" links={developer} />
            <SocialCategory name="GAMING" links={gaming} />
        </div>
      </div>
    );
  }
}

export default App;
