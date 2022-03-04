<template>
  <div>
    <input
      @input="updateUser"
      v-if="type==='text'"
      v-model="user"
      :class="{
        formUserStyle,
        formErrorStyle,
      }"
      :type="type"
      :value="value"
      :placeholder="placeholder"
    />

    <input
       @input="updatePassword"
       v-if="type==='password'"
       v-model="password"
      :class="{
        formUserStyle,
        formErrorStyle,
      }"
      :type="type"
      :value="value"
      :placeholder="placeholder"
    />

    <input
      v-if="type==='submit'"

      :class="{
        formSubmitStyle,
      }"
      :type="type"
      :value="value"
      :placeholder="placeholder"
    />

    <img
      v-if="icon"
      draggable="false"
      class="form"
      :src="require(`@/assets/${icon}`)"
      :alt="alt"
    />
  </div>
</template>

<script>

export default {
  name: "Input",

  data() {
    return {
      user:"",
      password:"",
    }
  },

  props: {
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
      // required: true,
    },

    formSubmitStyle: {
      // required: true,
    },

    formErrorStyle: {
      // required: true,
    },

    icon: {
      type: String,
    },

    alt: {
      type: String,
    },
  },

  methods: {
    updateUser(){
      this.$store.commit('setUser', this.user)
    },
    updatePassword(){
      this.$store.commit('setPassword', this.password)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
