<template lang="">
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img
          class="w-20 h-w-20 mr-2"
          src="https://scontent.fkkc4-1.fna.fbcdn.net/v/t39.30808-6/433180184_993334225778890_9111824682756370904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NTaNX43mJyMQ7kNvgEVu4_d&_nc_ht=scontent.fkkc4-1.fna&oh=00_AYDS551nnzKXwa4oiF-fhuq2UKqX6frRMlJCKj0OQgePIg&oe=665E84D6"
          alt="logo"
        />
        BAAN PROMT
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Resend Verify Email </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                name="email"
                v-model="inputForm.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Email
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already Verify?
              <a @click="login()" href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    setLogin: {
      type: Function,
    },
  },
  data() {
    return {
      inputForm: {
        email: '',
      },
    };
  },
  methods: {
    async submit() {
      this.$store.dispatch('user/resendEmail', this.inputForm);
    },
    login() {
      this.setLogin('login');
    },
  },
};
</script>
<style lang=""></style>
