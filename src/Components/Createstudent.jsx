import { useState } from "react";
import { addUser } from "../../Usercrud";
import { useNavigate } from "react-router-dom";
import styles from './Createstudent.module.css'
const Createstudent = () => {


    const initialState = {
        Name: "",
        Gender: "",
        Age: "",
        image: "",
    }

    const Navigate = useNavigate();



    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addUser(formData);
        await setFormData(initialState);
        Navigate('/user/');
    };

    return (


        <div className={styles.outerbox}>
            <div className={styles.box}>

                <h1>Create Student</h1>
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
                    <button className='btn btn-primary' type="submit" style={{ marginTop: 15, padding: 10, width: 100 }}>Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Createstudent;