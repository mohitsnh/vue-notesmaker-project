<template>
    <div
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
        <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted.value }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
        <a  @click.prevent="modal.deleteModal=!modal.deleteModal" href="#" class="card-footer-item">Delete</a>
      </footer>
      <ModalDeleteNote v-if="modal.deleteModal" v-model="modal.deleteModal" :note-id="note.id"></ModalDeleteNote>
    </div>
</template>

<script setup>

import { computed, reactive } from 'vue';
import ModalDeleteNote from './ModalDeleteNote.vue';
import { useDateFormat } from '@vueuse/core'

//Pinia store variable


const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
const characterLength = computed( ()=>{
  let length = props.note.content.length
  let description = length>1 ? 'charachters' : 'charachter'
  return `${length} ${description}`
}
)
//storeNotes.deleteNote(note.id) use it with click.prevent for delete button
const modal= reactive({
  deleteModal: false
})

//date formatted
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'YYYY-MM-DD HH:mm')
})

</script>