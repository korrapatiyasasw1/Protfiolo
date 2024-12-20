import { useState } from 'react';
import axios from 'axios';

let api_url = "http://localhost:3000/StudentProfile";
function StudentForm() {
    const [Student, setStudent] = useState([]);
    const [newStudent, setNewStudent] = useState({
        Name: ""
    });
   
    const addProfile = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(api_url, newStudent);
            setStudent([...Student, res.data]);
            setNewStudent({ Name: "" });
        } catch (error) {
            console.log("error");
        }
    };


    return (
        <>
        <div id="Profile">
            <form id="SearchProfile" onSubmit={addProfile}>
                <input
                    type="text"
                    value={newStudent.Name}
                    onChange={(e) => setNewStudent({ ...newStudent, Name: e.target.value })}
                    placeholder="Name"
                />
                <button type="submit">Submit</button>
            </form>
     
        </div>
    </>
    )
}

export default StudentForm