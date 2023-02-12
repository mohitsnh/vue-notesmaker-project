<template>
    <div class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`">
      <div class="field">
        <div class="control">
        <label v-if="label" class="label has-text-white">{{ label }}</label>
          <textarea
            class="textarea"
            v-auto-focus
            :value="modelValue"
            :placeholder="placeholder"
            ref="textareaRef"
            @input="$emit('update:modelValue',$event.target.value)"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons"/>
        </div>
      </div>
    </div>
</template>

<script setup>  
import {ref} from 'vue';
import { vAutoFocus } from '@/directives/vAutoFocus.js'
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
      type: String,
      required: false,
      default: "success"
    },
    placeholder: {
      type: String,
      default: "Type something..."
    },
    label: {
      type: String
    }
})
const emit = defineEmits(['update:modelValue'])
//
const textareaRef = ref(null)
// focus text area
const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})


</script>