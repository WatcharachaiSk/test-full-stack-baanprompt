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
v1: 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
v2: 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
v3: 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
v4: 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
v5: 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
```
#### แล้วทำการ back-end ใหม่
