import getRandomVerseIndex from './Lyrics'

const Menu = ({ setStart, start, lyrics, setLyricsDisplayed, name, home }) => {

    const switchPage = (pageName) => {
        setStart(pageName);
      }

    const getRandomVerseIndex = () => {
    let lyricsRandom = [];
    for (let x = 0; x < 4; x++) {
        let randomIndex = Math.floor(Math.random() * lyrics.length);
        let line = lyrics[randomIndex].replaceAll(/baby|she|baby,|she,/g, name).replaceAll(/home/g, home);
        if (name == ''){
            lyricsRandom.push(lyrics[randomIndex]);
        }
        else {
        lyricsRandom.push(line);
        }
    }
    // line.replace('baby', name)
    setLyricsDisplayed(lyricsRandom);
}

    window.onload = () => {
        getRandomVerseIndex();
    }

    const getLyricsPage = () => {
        getRandomVerseIndex();
        switchPage('Lyrics');
    }

    return(
        <div className='menu-wrapper'>
            <div className='menu-items'>
                <h1 onClick={() => getLyricsPage()}>New Song</h1>
                {start == 'Lyrics' ?
                 <h1 onClick={() => switchPage('Customize')}>Customize</h1> :
                 <h1 onClick={() => switchPage('Lyrics')}>Lyrics</h1>
                }
               
            </div>
        </div>
    )
}

export default  Menu;