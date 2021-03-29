import rojo from './Robert_Johnson_nobackground.png';
import speechbubble from './speechbubble.png';


const Customize = ({ name, home, setName, setHome }) => {

    const updateName = e => {
        setName(e.target.value)
    }

    const updateHome = e => {
        setHome(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        setName(name);
        setHome(home);
    }

    return (
        <div className='lyrics-wrapper'>
            <form className='settings-wrapper'>
                <div className='baby-form-wrapper'>
                    <label className='settings-label'>Baby's Name:
        <input className='settings-form' name='babyName' value={name} onChange={updateName} type='text' />
                    </label>
                </div>
                <div className='home-form-wrapper'>
                    <label className='settings-label'>Home Name:
        <input className='settings-form' name='homeName' value={home} onChange={updateHome} type='text' />
                    </label>
                </div>
                <button className='settings-submit' type='submit' onClick={onSubmit}>Save</button>
            </form>

            <div className='rojo-image'>
                <img src={rojo} />
            </div>
            <div className='speech-bubble-image'>
                <img src={speechbubble} />
            </div>
        </div>

    )
}

export default Customize;