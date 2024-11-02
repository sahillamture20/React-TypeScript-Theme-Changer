import { useContext } from 'react'
import { ThemeContext } from '../context/Theme';

const Box = () => {

    const {theme, themeToggle} = useContext(ThemeContext);
    // alert(theme);

  return (
    <div className='box-container' style={{
        backgroundColor: theme === 'light'? 'white' : 'black',
        color: theme === 'light'? 'black' : 'white',
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
    }}>
        <h3>Box 1</h3>
        <button onClick={themeToggle} style={{ cursor: 'pointer' }}>Change theme</button>
    </div>
  )
}

export default Box