export default function ({ store, redirect }) {
  if (process.client) {
    const token = localStorage.getItem('auth_token.local');
  
    if (token) {
      // ถ้ามี access_token เปลี่ยนเส้นทางไปที่หน้าแรกหรือหน้าอื่นที่ต้องการ
      return redirect('/');
    }
  }
}