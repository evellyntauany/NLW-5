import Image from 'next/image';
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import styles from './styles.module.scss';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css'

export function Player() {
  const {episodeList, currentEpisodeIndex} = useContext(PlayerContext)

  const episode = episodeList[currentEpisodeIndex]


  return (
   <div className={styles.playerContainer}>
    <header>
      <img src= "/playing.svg" alt="Tocando agora" />
      <strong>Tocando agora{episode?.title}</strong>
    </header>

    {episode ? (
        <div className="styles.currentEpisode">
            <Image 
            width={592} 
            height={593} 
            src={episode.thumbnail}
            alt="episode"
            objectFit="cover"/>
            <strong>{episode.title}</strong>
            <span>episode.title</span>
        </div>
    ) : (
      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
    )}

    

    <footer className={!episode ? styles.empty: ''}>
      <div className={styles.progress}>
        <span>00:00</span>
        <div className={styles.slider}>
          {episode? (
            <Slider
              trackStyle={{backgroundColor:'#04d361'}}
              railStyle={{backgroundColor:'#9f75ff'}}
              handleStyle={{borderColor:'#04d361',borderWidth:'4'}}
           ></Slider>
          ):(
            <div className={styles.emptySlider}/>
          )}
    
        </div>
        <span>00:00</span>
      </div>

          {episode &&  (
            <audio
            src={episode.url}
            ></audio>
          )}
      <div className={styles.buttons}>
        <button type="button" disabled={!episode}>
          <img src="/shuffle.svg" alt="Embaralhar" />
        </button>
        <button type="button" disabled={!episode}>
          <img src="/play-previous.svg" alt="Tocar anterior" />
        </button>
        <button type="button" disabled={!episode}>
          <img src="/play-next.svg" alt="Tocar proxima" />
        </button>
        <button type="button" disabled={!episode}>
          <img src="/repeat.svg" alt="Repetir" />
        </button>
      </div>
    </footer>
     
   </div>

 
  );
}