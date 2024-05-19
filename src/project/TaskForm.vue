<script setup>

//difference dynamic data for vue3 is we use v-bind but for react we use {}
//eg <ChildComponent v-bind:propName="value"></ChildComponent> for vue3
//and  <ChildComponent propName={value} />


// import ChildComponent from './ChildComponent';

// function App() {
//   const value = 'Hello';

//   return (
//     <ChildComponent propName={value} />
//   );
// }

import {ref,reactive,provide} from 'vue'
import { useTaskStore } from '../stores/TaskStore';
const comeTask=useTaskStore()
const task=ref({
    taskName:"",
    description:"",
   
})
// let newTask;
const handleSubmit=()=>{
    console.log(task.value)
    const newTask={
         taskName:task.value.taskName,
        description:task.value.description,
    }
    comeTask.addTask(newTask)
   

   
    //   localStorage.setItem('task',JSON.stringify(newTask))
    


} 
</script>
<template>
    <div class="flex  justify-center items-center  ">
        <form @submit.prevent="handleSubmit" class=" flex flex-col  w-1/2 h-40 gap-2">
        <div class="flex flex-row gap-1 ">
             <div class="flex flex-col">
            <input class="border bg-slate-500" type="text" v-model="task.taskName" placeholder="enter taskName"/>
        <input class="border bg-slate-500" type="text" v-model="task.description"        placeholder="enter description"/>
        </div>
        
        <button class="bg-cyan-950 text-slate-100 rounded-md h-12 self-center" type="submit">submit</button></div>
       
        </form>
    </div>
</template>