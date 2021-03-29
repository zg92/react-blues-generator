import './App.css';
import { useState } from 'react';
import Lyrics from './Lyrics'
import Menu from './Menu'
import Customize from './Customize'

const App = () => {

  const [lyrics, setLyrics] = useState(
    ['I sent for my baby, and she dont come/I sent for my baby, man, and she dont come/All the doctors in home sure cant help her none', 'And if she gets unruly, thinks she dont want do/If she gets unruly, and thinks she dont want do/Take my 32-20, and cut her half in two', 'She got a thirty-eight special, but I believe its most too light/She got a thirty-eight special, but I believe its most too light/I got a 32-20, got to make the camps alright', "If I send for my baby, man, and she dont come/If I send for my baby, man, and she dont come/All the doctors in Hot Springs sure can't help her none", "I'm gonna shoot my pistol, gonna shoot my Gatlin gun/I'm gonna shoot my pistol, gonna shoot my Gatlin gun/You made me love you, now your man have come", 'Aw baby, where you stay last night?/Ah baby, where you stay last night?/You got your hair all tangled, and you aint talkin right', "Got a thirty-eight special, boys, it do very well/Got a thirty-eight special, boys, it do very well/I Got a 32-20 now, and it's a burnin hell", 'If I send for my baby, man and she dont come/If I send for my baby, man and she dont come/All the doctors in home sure cant help her none', 'Hey hey baby, where you stay last night/Hey hey baby, where you stayed last night/You didnt come home until the sun was shinin bright', 'Ah boys, I just cant take my rest/Ah boys, I just cant take my rest/With this 32-20 layin up and down my breast', 'Early this morning when you knocked upon my door/Early this morning, when you knocked upon my door/And I said hello Satan I believe its time to go', 'Me and the Devil was walking side by side/Me and the Devil was walking side by side/And Im going to beat my woman til I get satisfied', 'She said you dont see why that she would dog me round/She say you dont see why, that she would dog me round/It must-a be that old evil spirit so deep down in the ground', 'You may bury my body down by the highway side/You may bury my body down by the highway side/So my old evil spirit can get a Greyhound bus and ride', 'I went to the crossroad, fell down on my knees/I went to the crossroad, fell down on my knees/Asked the Lord above, "Have mercy, now, save poor me if you please”', 'Ooh, standin at the crossroad, tried to flag a ride/Ooh-ee, I tried to flag a ride/Didnt nobody seem to know me, babe, everybody pass me by', 'Standin at the crossroad, baby, risin sun goin down/Standin at the crossroad, baby, eee-eee, risin sun goin down/I believe to my soul, now, poor Bob is sinkin down', 'You can run, you can run, tell my friend Willie Brown/You can run, you can run, tell my friend Willie Brown/That I got the crossroad blues this mornin, Lord, babe, Im sinkin down', 'And I went to the crossroad, mama, I looked east and west/I went to the crossroad, baby, I looked East and West/Lord, I didnt have no sweet woman, ooh well, babe, in my distress', "From four till late I was wringing my hands and cryin/From four till late I was wringing my hands and cryin/I believe to my soul that your daddy's home bound", "From home to Norfolk is a thirty-six hour ride/From home to Norfolk is a thirty-six hour ride/A man's like a prisoner and he's never satisfied", 'A woman is like a dresser, some man is always rambling through its drawers/A woman is like a dresser, some man is always rambling through its drawers/Its because so many men wear an apron overhaul', "From four until late she get with a no-good bunch and clown/From four until late she get with a no-good bunch and clown/Now, she won't do nothing but tear a good man's reputation down", 'When I leave this town, Im gonna bid you fare, farewell/When I leave this town, Im gonna bid you fare, farewell/And when I return again Ill have a great long story to tell']
  )

  const [start, setStart] = useState('Lyrics');
  const [lyricsDisplayed, setLyricsDisplayed] = useState([]);
  const [name, setName] = useState('');
  const [home, setHome] = useState('');

  return (
    <div className="App">
      <Menu start={start} setStart={setStart} lyrics = {lyrics} setLyricsDisplayed={setLyricsDisplayed} name = {name} home={home} />
      {start == 'Lyrics' ? <Lyrics setLyrics = {setLyrics} lyricsDisplayed = {lyricsDisplayed} /> : <Customize setName = {setName} setHome = {setHome} home = {home} name = {name} />}
    </div>
  );
}

export default App;
