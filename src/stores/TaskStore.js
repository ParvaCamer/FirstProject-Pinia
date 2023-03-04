import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 1, title: "play Hogwarts Legacy", isFav: true }
        ],
        name: "ParvaCamer"
    }),
    getters: {
        favs() {
            return this.tasks.filter(task => task.isFav)
        },
        favCount() {
            return this.tasks.reduce((previews, current) => {
                return current.isFav ? previews + 1 : previews
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})