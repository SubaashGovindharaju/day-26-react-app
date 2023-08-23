import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getProfile } from "../../Usercrud";
import styles from './Studentid.module.css';

const Studentid = () => {

    const { studentId } = useParams();
    const [profileData, setData] = useState({
        Name: "",
        Gender: "",
        Age: "",
        image: ""
    });
    const loadUsers = async () => {
        const response = await getProfile(studentId);
        setData(response);
    }

    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const removeFromUi = async (userId) => {
        // eslint-disable-next-line no-unused-vars
        const response = await deleteUser(userId);
        const newUser = profileData.filter(({ id }) => userId !== id);
        setData(newUser);
    }
    return (
        <div className={styles.body}>
            <div className={styles.outerbox}>
                <div className={styles.box}>
                    <div className={styles.profile}>
                        <img className={styles.img} src={profileData.image} alt="" />
                        <h2>{profileData.Name}</h2>
                        <h3>AGE: {profileData.Age}</h3>
                        <h3>Gender:{profileData.Gender}</h3>
                        <div className={styles.button}>
                            <Link style={{ textDecoration: 'none' }} to={`/user/Edituser?id=${profileData.id}`}>
                                <button className={` btn btn-primary ${styles.button}`}>EDIT</button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to={`/user`}> <button className={` btn btn-primary ${styles.button}`} onClick={() => removeFromUi(profileData.id)} >Delete</button></Link>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Studentid;