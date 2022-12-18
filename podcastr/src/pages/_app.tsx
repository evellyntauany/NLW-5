import '../styles/global.scss'

import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContext } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';
import { useState } from 'react';



export default function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

 function play(episode){
  setEpisodeList(episode);
  setCurrentEpisodeIndex(0);
 }

  return (
    <PlayerContext.Provider value={{episodeList,currentEpisodeIndex}}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
      </PlayerContext.Provider>

  )
}
