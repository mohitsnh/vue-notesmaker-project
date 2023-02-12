<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" bg-color="link" placeholder="Edit Note" label="Edit Note">
      <template #buttons>
        <button class="button is-link is-light mr-2" @click="$router.back()">
            Cancel Note
          </button>
        <button @click="handleSaveClick" class="button is-link has-background-link" :disabled="!noteContent">
            Save Note
          </button>
      </template>
    </AddEditNote>
    </div>
</template>
<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useStoreNotes} from '@/stores/storeNotes';
import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
const noteContent = ref('')
const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()
noteContent.value = storeNotes.getNoteContent(route.params.id)
//Save Button
const handleSaveClick = () =>
{
  storeNotes.updateNotes(route.params.id,noteContent.value)
  router.push('/')
}
</script>