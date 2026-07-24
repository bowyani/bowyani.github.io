# Portfolio

React + Vite + TypeScript portfolio, auto-deployed to GitHub Pages via GitHub Actions.

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:5173

## สิ่งที่ต้องแก้ก่อนขึ้นเว็บจริง

1. **รูปและไฟล์ใน `public/`** — ตอนนี้เป็นไฟล์เปล่า ให้แทนที่ด้วยของจริง:
   - `public/profile.jpg` — รูปโปรไฟล์
   - `public/resume.pdf` — เรซูเม่
   - `public/projects/project1.png`, `project2.png`, `project3.png` — รูปผลงาน (เซฟจากเว็บ Wix เดิม หรือใช้รูปใหม่)
   - `public/favicon.ico` — ตอนนี้เป็น favicon ชั่วคราว เปลี่ยนได้ตามต้องการ

2. **`src/data/profile.ts`** — แก้ bio ให้เป็นคำอธิบายตัวเองแบบเต็ม ๆ

3. **`src/data/projects.ts`** — แก้ title/description/tags ของแต่ละโปรเจกต์ให้ตรงกับงานจริง (มี `TODO` กำกับไว้ให้แล้ว) เพิ่ม object ใหม่ในนี้ได้เรื่อย ๆ ถ้ามีผลงานมากกว่านี้

4. **`vite.config.ts`** — `base: '/portfolio/'` ต้องตรงกับชื่อ repo บน GitHub เป๊ะ ๆ
   - repo ชื่อ `portfolio` → คงค่านี้ไว้
   - repo ชื่อ `yourname.github.io` (user/org page) → เปลี่ยนเป็น `base: '/'`
   - repo ชื่ออื่น เช่น `my-site` → เปลี่ยนเป็น `base: '/my-site/'`

## Deploy ขึ้น GitHub Pages (auto)

1. Push โปรเจกต์นี้ขึ้น repo บน GitHub (branch `main`)
2. ไปที่ repo → **Settings → Pages → Build and deployment → Source** เลือก **GitHub Actions**
3. ทุกครั้งที่ push เข้า `main`, workflow ใน `.github/workflows/deploy.yml` จะ build และ deploy ให้อัตโนมัติ
4. เว็บจะอยู่ที่ `https://<username>.github.io/<repo-name>/`

## โครงสร้างโปรเจกต์

```
src/
├── components/     # UI components (Header, Hero, ProjectCard, DisciplineTabs, ...)
├── data/           # เนื้อหา: profile.ts, projects.ts
├── hooks/          # custom hooks เช่น useScrollReveal
├── layouts/        # MainLayout ที่ครอบ Header/Footer
├── pages/          # Home.tsx (หน้าเดียวตอนนี้ แต่ขยายเป็นหลายหน้าได้)
├── styles/         # tokens.css (design tokens) + global.css
├── types/          # TypeScript interfaces
└── utils/          # helper functions
```

## แนวคิดการออกแบบ

โทนสี "สมุดร่าง" — พื้นหลังขาวอมเขียวเย็น ตัวหนังสือกรมท่าเข้ม accent สีม่วง เลือกเพราะเนื้อหามีสามสาย
งาน (Coding / Business Survey / UI Design) ที่ไม่ได้เรียงเป็นลำดับ จึงออกแบบเป็น "ป้ายดัชนี" ซ้อนกันแบบสมุด
โน้ตแทนตัวเลข 01/02/03 — คลิกป้ายเพื่อกรองผลงานตามสายงานได้
