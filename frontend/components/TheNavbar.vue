<template>
  <div class="center examplex z-0">
    <vs-navbar
      :color="active"
      center-collapsed
      v-model="active"
    >
      <template #right>
        <button
          @click="logout()"
          type="button"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          logout
        </button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "TheNavbar",
  data() {
    return {
      active: "rgb(84, 110, 122)",
    };
  },
  mounted() {},
  methods: {
    async logout() {
      Swal.fire({
        title: "Are you sure logout?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4ea7fa",
        cancelButtonColor: "#f95555",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$auth.logout(); //TODO auth
          window.location.reload();
        }
      });
    },
  },
};
</script>
