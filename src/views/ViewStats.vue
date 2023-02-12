<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stats</th>
        <th>Value</th>
      </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{storeNotes.getNotesCount}}</td>
      </tr>
      <tr>
          <td>Number of Charcters in all notes</td>
          <td>{{storeNotes.getCharacterCount}}</td>
      </tr>
      </tbody>
    </table>
    <input type="text" v-auto-focus class="input" placeholder="Do you love noteballs?" v-model="noteballsFeedback"/>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import { useStoreNotes } from '../stores/storeNotes';
  import { vAutoFocus } from '@/directives/vAutoFocus.js'
  import { useWatchCharacters } from '@/use/useWatchCharacters'
  const noteballsFeedback = ref('')
  useWatchCharacters(noteballsFeedback,50)
  const storeNotes = useStoreNotes()
</script>