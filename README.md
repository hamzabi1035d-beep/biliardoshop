<div align="center">

# 🎱 Billiard Store Morocco

### متجر مستلزمات البيلياردو والبابي فوت في المغرب

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

![Preview](https://img.shields.io/badge/Status-Ready-brightgreen?style=for-the-badge)

موقع تجاري احترافي لبيع مستلزمات البيلياردو والبابي فوت في المغرب
مع دعم كامل للغة العربية وتكامل مع واتساب للطلبات

</div>

---

## 📸 معاينة

| الصفحة الرئيسية | المنتجات |
|:---:|:---:|
| Hero Section | Products Grid |
| واجهة ترحيبية مع خلفية احترافية | شبكة منتجات مع فلاتر |

## ✨ المميزات

- 🎨 **تصميم احترافي** — واجهة أنيقة بألوان أسود + أخضر + أبيض
- 📱 **متجاوب بالكامل** — يعمل على جميع الأجهزة (هاتف، تابلت، حاسوب)
- 🇲🇦 **دعم عربي كامل** — واجهة RTL مع خط Cairo العربي
- 💬 **تكامل واتساب** — أزرار طلب مباشرة عبر واتساب
- ⚡ **سرعة عالية** — مبني بـ Vite لسرعة تحميل مثالية
- 🎯 **سهل التعديل** — كود منظم وسهل التخصيص
- 🖼️ **صور مولّدة بالذكاء الاصطناعي** — صور منتجات احترافية
- 🧩 **مكونات معاد استخدامها** — بنية React قابلة للتوسيع

## 🛒 الأقسام

| القسم | المنتجات |
|-------|----------|
| 🎱 **مستلزمات البيلياردو** | كرات، ستيكات، طباشير Master، قماش الطاولات، جسور Rest، قطع غيار |
| ⚽ **مستلزمات بابي فوت** | كرات، مقابض، قضبان، مجسمات، نوابض، قطع غيار |

## 🏗️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| **React 19** | مكتبة واجهة المستخدم |
| **Vite 7** | أداة البناء والتطوير |
| **Tailwind CSS 4** | تنسيق الأنماط |
| **TypeScript** | لغة البرمجة |
| **Vite Single File** | بناء ملف HTML واحد |

## 📁 هيكل المشروع

```
billiard-store-morocco/
├── public/
│   └── images/
│       ├── hero.jpg              # صورة الخلفية الرئيسية
│       ├── billiard-ball.jpg     # صورة كرة البيلياردو
│       ├── cue-stick.jpg         # صورة الستيك
│       ├── chalk.jpg             # صورة الطباشير
│       ├── foosball.jpg          # صورة طاولة البابي فوت
│       ├── foosball-ball.jpg     # صورة كرة البابي فوت
│       └── foosball-handle.jpg   # صورة المقبض
├── src/
│   ├── App.tsx                   # المكون الرئيسي (كل المكونات)
│   ├── main.tsx                  # نقطة الدخول
│   └── index.css                 # الأنماط المخصصة
├── index.html                    # ملف HTML الرئيسي
├── package.json                  # إعدادات المشروع
├── vite.config.ts                # إعدادات Vite
├── tsconfig.json                 # إعدادات TypeScript
├── .gitignore                    # ملفات Git المتجاهلة
├── LICENSE                       # رخصة MIT
└── README.md                     # هذا الملف
```

## 🚀 التشغيل المحلي

### المتطلبات
- **Node.js** الإصدار 18 أو أحدث
- **npm** أو **yarn** أو **pnpm**

### خطوات التثبيت

```bash
# 1. استنساخ المشروع
git clone https://github.com/USERNAME/billiard-store-morocco.git

# 2. الدخول للمجلد
cd billiard-store-morocco

# 3. تثبيت الحزم
npm install

# 4. تشغيل خادم التطوير
npm run dev

# 5. البناء للإنتاج
npm run build

# 6. معاينة نسخة الإنتاج
npm run preview
```

## ⚙️ التخصيص

### تغيير رقم واتساب
عدّل الرقم في ملف `src/App.tsx`:

```typescript
const WHATSAPP_NUMBER = "212XXXXXXXXX";
```

### إضافة منتجات جديدة
أضف عنصر جديد في مصفوفة `products` في ملف `src/App.tsx`:

```typescript
{
  id: 6,
  name: "اسم المنتج",
  price: 100,
  description: "وصف المنتج",
  image: "/images/product.jpg",
  category: "billiard", // أو "foosball"
}
```

### تغيير الألوان
عدّل المتغيرات في ملف `src/index.css`:

```css
@theme {
  --color-billard-green: #22c55e;
  --color-billard-black: #0a0a0a;
}
```

## 📞 التواصل

| الطريقة | التفاصيل |
|---------|----------|
| 📞 **الهاتف** | 0717657640 |
| 💬 **واتساب** | [اضغط هنا](https://wa.me/212717657640) |
| 📍 **الموقع** | المملكة المغربية 🇲🇦 |

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT — راجع ملف [LICENSE](./LICENSE) للتفاصيل.

---

<div align="center">

**🇲🇦 صنع بكل ❤️ في المغرب**

[⬆️ العودة للأعلى](#-billiard-store-morocco)

</div>
