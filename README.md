## คู่มือการติดตั้ง Environment (Development)

- พัฒนาด้วย Nuxt NestJS Mariadb
- พัฒนาบน Node Version v16.20.2

#### Setup Docker

รันคำสั่งที่ root file

```bash
docker-compose up -d
```

#### Setup front-end

```javascript
// เข้าไปที่ ไฟล์ front-end
cd frontend/

// ติดตั้ง package
npm install

// รัน
npm run dev

// port listen on 3000
```

#### Setup back-end
เปลี่ยน env back-end SENDGRID_API_KEY อยู่ในคู่มือ เอกสารโปรเจกต์

```javascript
// เข้าไปที่ ไฟล์ back-end
cd backend/

// ติดตั้ง package
npm install

// รัน
npm run dev

// port listen on 3500
```

#### ถ้าหากว่า การ Send email eroor 401 ให้เปลี่ยน env back-end SENDGRID_API_KEY

```javascript
SENDGRID_API_KEY อยู่ในคู่มือ เอกสารโปรเจกต์
```

#### แล้วทำการ back-end ใหม่
