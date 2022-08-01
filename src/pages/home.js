import { Link } from 'react-router-dom';

const Home =() => {
    return (
        <div>
            <h1>Hello</h1>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <br />
            <br />
            <Link to='/contact'>
                <button>Contact Me!</button>
            </Link>
        </div>
    );
};

export default Home