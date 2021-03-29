
const Lyrics = ({lyricsDisplayed }) => {

    return (
        <div className='lyrics-wrapper'>
            <div className='lyrics'>
                {lyricsDisplayed.map(verse => <div className='verse'>
                    {verse.split('/').map(line => <div className='lines'>{line}</div>)}
                    </div>)}

            </div>
        </div>
    )

}

export default Lyrics;