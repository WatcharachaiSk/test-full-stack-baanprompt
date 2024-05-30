<template lang="">
  <div>
    <div v-if="isLogin == 'register'">
      <Register :setLogin="setLogin" />
    </div>
    <div v-if="isLogin == 'login'">
      <Login :setLogin="setLogin" />
    </div>
    <div v-if="isLogin == 'emailVerify'">
      <EmailVerify :setLogin="setLogin" />
    </div>
  </div>
</template>
<script>
import Register from '@/components/users/Register.vue';
import Login from '@/components/users/Login.vue';
import EmailVerify from '@/components/users/EmailVerify.vue';
export default {
  middleware: 'guest',
  components: { Register: Register, Login: Login, EmailVerify: EmailVerify },
  data() {
    return {
      isLogin: 'login',
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
