import { Link } from 'react-router-dom';

const Contact =() => {
    return (
        <div>
            <h1>Contact Information</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Contact