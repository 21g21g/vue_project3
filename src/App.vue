<script setup>
import TaskForm from "./project/TaskForm.vue"
import TaskList from "./project/TaskList.vue"
import Task from "./project/Task.vue"
import Home from "./components/Home.vue"
import {mdiAccount} from "@mdi/js"
</script>

<template>
<div><div class="flex justify-end gap-2 items-start p-3 text-blue-700">
   

    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/notfe">no</router-link>
 </div>
 <router-view></router-view>
 <div class="flex flex-col gap-2">
   <TaskForm/>
   <TaskList/>
   <mdiAccount/>
     <!-- <Task/> -->
 </div>
 
 </div>
  
</template>


