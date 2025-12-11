import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { StyleSheet, View,  } from 'react-native';
import VideoThumbnail from './VideoThumbnail';
import {memo} from 'react'
import * as ScreenOrientation from 'expo-screen-orientation';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoPlayer = () => {
  const [load,setload] = useState(false)
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.pause();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  const handlePlayer = ()=>{
    setload(true)
    player.play();
  }


  const handleFullscreenEnter = ()=>{
    
  }

  const handleFullscreenExit = ()=>{
  
  }


  return (
    <View style={styles.contentContainer}>
    {load && <VideoView style={styles.video} player={player} onFullscreenEnter={handleFullscreenEnter} onFullscreenExit={handleFullscreenExit} allowsPictureInPicture /> }
      

    {/* Thumbnail */}
    {!load && <VideoThumbnail onPress={handlePlayer} /> }
    </View>
  );
}

export default memo(VideoPlayer)

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
});
