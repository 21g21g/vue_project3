<script setup>
import { useTaskStore } from "../stores/TaskStore";
const tasks=useTaskStore()
const handleIncrease=()=>{
    tasks.increaseCount()

}
const decreaseHandler=()=>{
    tasks.decreaseCount()

}
</script>
<template>
<div class="flex justify-center" >
    <div v-for="(task,index) in tasks.taskFav" :key="index">
        <h2>{{task.taskName}}</h2>
        <h2>{{task.description}}</h2>
    </div>
    <!-- <h1>{{task.count}}</h1>
    <button @click="handleIncrease">increase</button>
    <button @click="decreaseHandler">decrease</button> -->
    <!-- <i class="material-icons">home</i> -->
    
    </div>
    
</template>