import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Practice() {
const [exerciseData, setExerciseData] = useState([]);
const [newExercise, setNewExercise] = useState({name: '', weight: '', sets: '', reps: ''});


useEffect(() => {
fetchExerciseData();
}, []);


const fetchExerciseData = async () => {
try {
const response = await axios.get('http://172.31.75.129:8000/exercise/');
setExerciseData(response.data);
} catch (error) {
console.error('Error:', error);
}
}


const addExercise = async () => {
try {
await axios.post('http://172.31.75.129:8000/exercise/', newExercise);
fetchExerciseData();
} catch (error) {
console.error('Error:', error);
}
}


const deleteExercise = async (id) => {
try {
await axios.delete(`http://172.31.75.129:8000/exercise/${id}`);
fetchExerciseData();
} catch (error) {
console.error('Error:', error);
}
}


return (
<div>
<h1>Exercise Data</h1>
<table>
<thead>
<tr>
<th>Name</th>
<th>Weight</th>
<th>Sets</th>
<th>Reps</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{exerciseData.map((exercise, index) => (
<tr key={index}>
<td>{exercise.name}</td>
<td>{exercise.weight}</td>
<td>{exercise.sets}</td>
<td>{exercise.reps}</td>
<td>
<button onClick={() => deleteExercise(exercise.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
<h2>Add New Exercise</h2>
<input type="text" placeholder="Name" onChange={e => setNewExercise({...newExercise, name: e.target.value})} />
<input type="text" placeholder="Weight" onChange={e => setNewExercise({...newExercise, weight: e.target.value})} />
<input type="text" placeholder="Sets" onChange={e => setNewExercise({...newExercise, sets: e.target.value})} />
<input type="text" placeholder="Reps" onChange={e => setNewExercise({...newExercise, reps: e.target.value})} />
<button onClick={addExercise}>Add Exercise</button>
</div>
);
}


export default Practice;
