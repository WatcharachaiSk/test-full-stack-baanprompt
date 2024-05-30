import { Endpoints } from '@/constants/endpoint';
import { sweet_popUpTimer, sweet_toast } from '@/components/sweetalert/swalFire';
import Swal from 'sweetalert2';
import Rotuers from '../../routers';

const state = {};
const mutations = {};
const actions = {
  async createUser({ commit }, payload) {
    const url = Endpoints.Register;

    try {
      const response = await this.$axios.post(url, payload);
      console.log('response is ', response);
      if (response.status == 200 || response.status == 201) {
        Swal.fire({
          title: 'THANKS FOR SIGNING UP',
          text: `Verify Your E-Mail ${response.data.email} Address`,
          icon: 'success',
        });
      }
    } catch (error) {
      if (error.response.status == 409) {
        sweet_popUpTimer('center', 'warning', 4000, 'รหัสผู้ใช้งานถูกใช้ไปแล้ว', 'กรุณาเปลี่ยนรหัสผู้ใช้งานใหม่');
      } else if (error.response.status == 400) {
        sweet_popUpTimer('center', 'warning', 4000, 'ข้อมูลไม่ครบหรือผิดพลาด', 'กรุณาตรวจสอบข้อมูลของท่านให้ครบถ้วน');
      } else if (error.response.status >= 500) {
        sweet_popUpTimer('center', 'error', 4000, 'การบันทึกข้อมูลผิดพลาด ทาง Server', 'กรุณาลองใหม่อีกครั้ง');
      }
    }
  },
  async login({ commit }, payload) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: payload,
      });
      const access_token = response?.data?.access_token || '';
      await this.$auth.setUserToken(access_token);
      sweet_toast('top-end', 'success', 'เข้าสู่ระบบเสร็จสิ้น');
      this.$router.push(Rotuers.home);
    } catch (error) {
      console.log('error.response is ', error.response);
      if (error.response.status == 401 || error.response.status == 404) {
        sweet_popUpTimer('center', 'warning', 4000, 'บัญชีผู้ใช้งานไม่ถูกต้อง', 'กรุณาตรวจสอบ email และ password อีกครั้ง');
      } else if (error.response.status == 403) {
        if (error.response.data.message == 'Email not verified') {
          sweet_popUpTimer('center', 'warning', 4000, 'Email not verified', 'กรุณาทำการ verify email ของท่าน');
        }
        if (error.response.data.message == 'User not active') {
          sweet_popUpTimer('center', 'error', 4000, 'บัญชีผู้ใช้งานถูกปิดใช้งาน', 'กรุณาติดต่อผู้ดูแลระบบเพื่อขอเปิดใช้งานอีกครั้ง');
        }
      } else {
        sweet_popUpTimer('center', 'error', 4000, 'การบันทึกข้อมูลผิดพลาด ทาง Server', 'กรุณาลองใหม่อีกครั้ง');
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
