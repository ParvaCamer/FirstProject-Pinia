<template>
  <main>
    <header>
      <img src="./assets/pinia-logo-svg.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
export default {
  components: {
    TaskDetails
  },
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  }
}
</script>