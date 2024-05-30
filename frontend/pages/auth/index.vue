<template lang="">
  <div>
    <div v-if="isLogin == false">
      <Register :setLogin="setLogin" />
    </div>
    <div v-if="isLogin == true">
      <Login :setLogin="setLogin" />
    </div>
  </div>
</template>
<script>
import Register from "@/components/users/Register.vue";
import Login from "@/components/users/Login.vue";
export default {
  middleware: "guest",
  components: { Register: Register, Login: Login },
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    setLogin(isState) {
      this.isLogin = isState;
    },
  },
};
</script>
<style lang=""></style>
