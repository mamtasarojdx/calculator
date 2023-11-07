import {useState,useEffect} from 'react'
// import axios from 'axios';

function Api() {
   const [data, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [title, setTitle] = useState('');
   const [userId, setUserId] = useState('');
 
   // Fetch data from REST API
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('https://api.example.com/data');
         const jsonData = await response.json();
         setData(jsonData);
       } catch (error) {
         console.log(error);
       }
     }
     fetchData();
   }, []);
 
   // Filter data based on title and userId
   useEffect(() => {
     const filtered = data.filter(item => {
       let match = true;
       if (title && !item.title.toLowerCase().includes(title.toLowerCase())) {
         match = false;
       }
       if (userId && item.userId !== parseInt(userId)) {
         match = false;
       }
       return match;
     });
     setFilteredData(filtered);
   }, [title, userId, data]);
 
   return (
     <div>
       <input
         type="text"
         placeholder="Enter title"
         value={title}
         onChange={e => setTitle(e.target.value)}
       />
       <input
         type="number"
         placeholder="Enter userId"
         value={userId}
         onChange={e => setUserId(e.target.value)}
       />
       
       <h3>Filtered Data:</h3>
       <ul>
         {filteredData.map(item => (
           <li key={item.id}>
             <strong>{item.title}</strong> - UserID: {item.userId}
           </li>
         ))}
       </ul>
     </div>
   );
 }
export default Api
