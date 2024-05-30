<template lang="">
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
            <!--  -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อ (ภาษาไทย)</label
                >
                <input
                  type="text"
                  name="thaiFirstName"
                  v-model="inputForm.thaiFirstName"
                  placeholder="ชื่อ (ภาษาไทย)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  pattern="^[ก-๏\s]+$"
                />
              </div>
              <!-- ... -->
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >นามสกุล (ภาษาไทย)</label
                >
                <input
                  type="text"
                  name="thaiLastName"
                  v-model="inputForm.thaiLastName"
                  placeholder="นามสกุล (ภาษาไทย)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  pattern="^[ก-๏\s]+$"
                />
              </div>
            </div>
            <!--  -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อ (ภาษาอังกฤษ)</label
                >
                <input
                  type="text"
                  name="engName"
                  v-model="inputForm.engFirsName"
                  placeholder="ชื่อ (ภาษาอังกฤษ)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  pattern="[a-zA-Z\s]+"
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >นามสกุล (ภาษาอังกฤษ)</label
                >
                <input
                  type="text"
                  name="engLastName"
                  v-model="inputForm.engLastName"
                  placeholder="นามสกุล (ภาษาอังกฤษ)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  pattern="[a-zA-Z\s]+"
                />
              </div>
            </div>

            <!--  -->
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >เบอร์โทรศัพท์</label
              >
              <input
                type="text"
                name="engFirsName"
                v-model="inputForm.phoneNumber"
                placeholder="เบอร์โทรศัพท์"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <!--  -->
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                v-model="inputForm.email"
                placeholder="name@company.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <!--  -->
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="inputForm.password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <!--  -->
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm-password"
                placeholder="••••••••"
                v-model="inputForm.confirmPassword"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <a
                @click="login()"
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Login here</a
              >
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
        thaiFirstName: "",
        thaiLastName: "",
        engFirsName: "",
        engLastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    login() {
      this.setLogin(true);
    },
    async submit() {
      this.$store.dispatch("user/createUser", this.inputForm);
    },
  },
};
</script>
<style scoped>
.invalid-input {
  border: 1px solid red;
}
</style>
