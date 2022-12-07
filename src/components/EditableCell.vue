<template>
  <div class="cell">
    <button v-if="isClosable" class="btn-close" @click="$emit('close')">
    </button>
    <div
      class="cell-content"
      contenteditable
      @blur="(event) => $emit('blur', event.target.innerText)"
      spellcheck="false"
    >
      {{ label }}
    </div>
    <span v-if="$slots.default" class="tooltip">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'EditableCell',
  props: {
    label: String,
    isClosable: Boolean,
  }
}
</script>

<style scoped>
.cell {
  position: relative;
  display: inline-block;
  width: 100%;
}
.cell-content {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem;
  width: 100%;
  min-height: 2rem;
  border-radius: 0.2rem;
}

.tooltip {
  visibility: hidden;
  width: 2rem;
  background-color: #303B41;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 5px 0;
  
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -1rem;
  z-index: 1;
}

.cell:focus-within .tooltip,
.tooltip:focus-within {
  visibility: visible;
}

.btn-close {
  visibility: hidden;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #2b2b2b;
  color: #ff4141;
  border: 1px solid #ff4141;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  top: -0.5rem;
  left: 0;
  margin-left: -1.2rem;
  z-index: 1;
}

.btn-close:active {
  outline: 2px solid #ff4141;
}

.btn-close:before, .btn-close:after {
  position: absolute;
  content: ' ';
  height: 50%;
  width: 0.1rem;
  background-color: #ff4141;
}
.btn-close:before {
  transform: rotate(45deg);
}
.btn-close:after {
  transform: rotate(-45deg);
}

.cell:focus-within .btn-close {
  visibility: visible;
}
</style>