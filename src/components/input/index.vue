<template>
  <div>
    <input :class="{
      formUserStyle: formUserStyleData,
      formSubmitStyle: formSubmitStyleData,
    }"
    :type="type" 
    :value="value" 
    :placeholder="placeholder">
    <img v-if="icon" draggable="false" class="form" :src="require(`@/assets/${icon}`)" :alt="alt">
  </div>
</template>

<script>
export default {
  name: "Input",
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
         default: false,
       },

       formSubmitStyle: {
         default: false,
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
            formUserStyleData: this.formUserStyle,
            formSubmitStyleData: this.formSubmitStyle,         
        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>