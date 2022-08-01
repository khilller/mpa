import { Link } from 'react-router-dom';

const About =() => {
    return (
        <div>
            <h1>Personal Information</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default About