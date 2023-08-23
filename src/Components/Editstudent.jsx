import { useEffect, useState } from "react";
import { getProfile, updateUser } from "../../Usercrud";
import {  useNavigate, useSearchParams } from "react-router-dom";
import styles from './Editstudent.module.css';
const Editstudent = () => {





    const initialState = {
        Name: "",
        Gender: "",
        Age: "",
        image: "",
        
    }


    const [params] = useSearchParams();


    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const loadUsers = async () => {
        const response = await getProfile(params.get('id'));
        setFormData(response);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value,
        });
    };


    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(params.get('id'), formData);
        navigate('/user/' + params.get('id'));
    };

    return (
        <div className={styles.outerbox}>
            <div className={styles.box}>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
            <div style={{ padding: 4 }}>
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ padding: 4 }}>
                <label htmlFor="Gender">Gender:</label>
                <input
                    type="text"
                    id="Gender"
                    name="Gender"
                    value={formData.Gender}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ padding: 4 }}>
                <label htmlFor="Age">Age:</label>
                <input
                    type="text"
                    id="Age"
                    name="Age"
                    value={formData.Age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ padding: 4 }}>
                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='btn btn-primary' type="submit" style={{ padding: 4 }}>Submit</button>
        </form>
        </div>
        </div>

    );
}



export default Editstudent;