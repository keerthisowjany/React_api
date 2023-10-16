import React, {useState,useEffect} from 'react'

const TaskManager =() => {
    const [tasks,setTasks] = useState([]);
    const [inputValue , setInputValue] = useState('');

    useEffect(() =>{
        const intialTasks =[
            { id : 1,text:'AIM',completed :false },
            { id:2,text:'CAI',completred :false},
        ];

        setTasks(intialTasks);
    
},[]);

const addTask = () =>{
    if(inputValue.trim() !==''){
        const newTask ={
            id : Date.now(),
            text :  inputValue,
            completed : false,
        };

        setTasks([...tasks,newTask]);
        setInputValue('');
    }
};

const removeTask =(taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
};

const toggleTaskStauts = (taskId) => {
    const updatedTasks=tasks.map((task) => {
        if(task.id === taskId){
            return {...task,completed: !task.completed};
        }
        return task;
    });
    setTasks(updatedTasks);
};
 return(
    <div className='conatiner'>{/*Add class name*/}
    

    </div>
 )
