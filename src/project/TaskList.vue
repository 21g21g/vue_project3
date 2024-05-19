<script setup>
import {useTaskStore} from "../stores/TaskStore"
const tasks=useTaskStore()

const deleteHandler=(index)=>{
    tasks.deleteTask(index)
}
const handleFavourite=(index)=>{
    const neFav={
        taskName:tasks.task[index].taskName,
        description:tasks.task[index].description
    }
    
    tasks.addFavourite(neFav)
   
}


</script>
<template>
<div>
    <!-- <h2>{{tasks.count}}</h2> -->
    <!-- <div class="flex flex-row">
        <button @click="handleFavourite">favourite</button>
    </div> -->
    
    <div v-for="(task,index) in tasks.task" :key="index" class="flex flex-row gap-2 ml-5 mt-2 p-3 bg-neutral-400 text-amber-500 w-1/2 justify-between mb-4">
   
            <div class="flex flex-row gap-2">
            <h1>{{task.taskName}}</h1>
             <h2>{{task.description}}</h2>
            </div>
             <div class="flex flex-row gap-1 justify-end">
             <button @click="deleteHandler(index)" class="bg-rose-700 text-slate-200">delete</button>
              <button class="bg-blue-600 text-neutral-100">edit</button>
            <button class="bg-emerald-500 text-neutral-100" @click="handleFavourite(index)">add</button>

           </div>
       
        


    </div>
    </div>
    
</template>