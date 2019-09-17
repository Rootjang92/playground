import React, { Component } from 'react';
import videojs from 'video.js';
import vjsEpisodeList from './vjsEpisodeList';
import './Video.css';

export default class Video extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);

      this.play();

      this.on('pause', () => {
        console.log('Pause!');
        const modal = this.createModal('This is a modal!');
        modal.addClass('vjs-my-fancy-modal');
        modal.on('modalclose', () => {
          this.play();
        })
      });

      this.on('ended', () => {
        videojs.log('Awww...over so soon?!');
      });
    });

    this.player.getChild('controlBar').addChild('vjsEpisodeList', {});
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={ node => (this.videoNode = node) } className="video-js">
          </video>
        </div>
      </div>
    )
  }
}