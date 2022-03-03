<template>
  <div>
    <input :class="{
      formUserStyle,
      formSubmitStyle,
      formErrorStyle,
    }"
    :type="type" 
    :value="value" 
    @input="$emit('clickSubmit', $event.target.value)"
    :placeholder="placeholder">
    <img v-if="icon" draggable="false" class="form" :src="require(`@/assets/${icon}`)" :alt="alt">
  </div>
</template>

<script>
export default {
  name: "Input",

  emits: "submitClick",
  props:{
     type: {
        type: String,
        required: true,
      },
    
      placeholder: {
        type: String,
      },

      value: {
        type: String,
      },

       formUserStyle: {
          required: true,
       },

       formSubmitStyle: {
          required: true,
       },

       formErrorStyle:{
         required: true,
       },

      icon: {
        type: String,
       },

      alt: {
        type: String,
       },
  },

  data(){
        return{
        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>