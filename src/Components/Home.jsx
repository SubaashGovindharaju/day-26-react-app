import { useEffect, useState } from 'react';
import styles from './Home.module.css'
import { getUser } from '../../Usercrud';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await getUser();
        setUsers(response);
    }

    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <div className={styles.body}>
        <div className={` container `}>
            <div className='row'>
                {users.map((user) => (
                    <div key={user.id} className={` ${styles.col} col `}>
                        <div className={`${styles.card} card`} >
                        <Link to={`/user/${user.id}`} >
                                <img className="card-img-top" src={user.image} alt={user.Name} />
                            </Link>
                            <div className={`card-body`}>
                        
                                <h4>{user.Name}</h4>
                                <h6>Age: {user.Age}</h6>
                                <h6>Gender: {user.Gender}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
        </div>
    );
}

export default Home;

