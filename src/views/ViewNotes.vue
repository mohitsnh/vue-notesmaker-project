<template>
  <div class="notes">
    <AddEditNote v-model="notesValue" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" class="button is-link has-background-success" :disabled="!notesValue">
            Add New Note
          </button>
      </template>
    </AddEditNote>
    <progress v-if="storeNotes.showProgressBar" class="progress is-large is-success" max="100"/>
    <template v-else>
    <Note v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      />

      <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">No notes here yet...</div>
    </template>

  </div>
</template>
<script setup>
//imports
import { ref,onMounted } from 'vue';
import { useWatchCharacters } from '@/use/useWatchCharacters'
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes} from '@/stores/storeNotes';
// ref variables
const addEditNoteRef = ref(null)
const notesValue = ref('')
//
const storeNotes = useStoreNotes()

const addNote = () => {
  
  storeNotes.addNote(notesValue.value)
  notesValue.value = ''
  addEditNoteRef.value.focusTextarea()
}
useWatchCharacters(notesValue,100)

</script>