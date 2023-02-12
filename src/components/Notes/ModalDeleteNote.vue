<template>
    <div class="modal is-active p-2">
  <div class="modal-background"></div>
  <div class="modal-card" ref="modalCardRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete the note?
    </section>
    <footer class="modal-card-foot is-justify-content-end">
      <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
      <button class="button" @click="closeModal">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes} from '@/stores/storeNotes';
const storeNotes = useStoreNotes()
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  noteId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue',false)
}

//on clicking outside the modal should close
const modalCardRef = ref(null)
onClickOutside(modalCardRef,closeModal)

// event listener for escape key
// //****handleEventListener to ensure the event listener can be closed****
const handleEventListener = (e) => {
  if(e.key === "Escape")
    {
      closeModal()
    }
}
onMounted(() => {
  document.addEventListener(
    'keyup', handleEventListener)
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleEventListener)
})
</script>