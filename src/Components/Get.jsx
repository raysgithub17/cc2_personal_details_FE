import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Get.css'
function Home(){

    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getDetail')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8080/del/${id}`)
        window.location.reload()
        .then(response =>{
            setData(data.filter(data => data.id !== id));
        console.log(response + "deleted");
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div>
            <h1>Person Details</h1>
            <table>
                <thead>
                <tr>
                    <th>userId</th>
                    <th>userName</th>
                    <th>email</th>
                    <th>password</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.userid}>
                            <td>{item.userid}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button onClick={() => handleDelete(item.userid)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Home;