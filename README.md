## คู่มือการติดตั้ง Environment (Development)

- พัฒนาด้วย ReactTS NestJS PostgreSQL
- พัฒนาบน Node Version 18.19.0

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

// port listen on 5173
```

#### Setup back-end

```javascript
// เข้าไปที่ ไฟล์ back-end
cd backend/

// ติดตั้ง package
npm install

// รัน
npm run dev

// port listen on 3000
```
