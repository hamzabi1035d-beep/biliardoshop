# 🎱 Billiard Store Morocco

متجر إلكتروني متخصص في بيع مستلزمات البيلياردو وبابي فوت في المغرب

---

## 📋 نظرة عامة

موقع إلكتروني احترافي مبني باستخدام React و Vite و Tailwind CSS، مصمم لعرض وبيع مستلزمات البيلياردو وبابي فوت مع إمكانية الطلب المباشر عبر واتساب.

### 🌐 المعاينة الحية

[رابط المعاينة](https://yourusername.github.io/billiard-store-morocco)

---

## ✨ المميزات

- 🎨 تصميم عصري بألوان أسود + أخضر + أبيض
- 📱 متجاوب مع جميع الأجهزة (موبايل، تابلت، كمبيوتر)
- 🛒 عرض المنتجات مع الأسعار
- 💬 طلب مباشر عبر واتساب
- 🔍 فلترة المنتجات حسب القسم
- ⚡ سرعة عالية في التحميل
- 🌐 دعم اللغة العربية (RTL)

---

## 🚀 التقنيات المستخدمة

| التقنية | الإصدار |
|---------|---------|
| React | 19.2.6 |
| Vite | 7.3.2 |
| Tailwind CSS | 4.1.17 |
| TypeScript | 5.9.3 |

---

## 📦 التثبيت والتشغيل

### المتطلبات المسبقة

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/yourusername/billiard-store-morocco.git
cd billiard-store-morocco
```

2. **تثبيت المكتبات**
```bash
npm install
```

3. **تشغيل المشروع للتطوير**
```bash
npm run dev
```

4. **بناء المشروع للإنتاج**
```bash
npm run build
```

5. **معاينة النسخة الإنتاجية**
```bash
npm run preview
```

---

## 📁 هيكل المشروع

```
billiard-store-morocco/
├── src/
│   ├── App.tsx          # المكون الرئيسي
│   ├── main.tsx         # نقطة الدخول
│   └── index.css        # التنسيقات العامة
├── index.html           # ملف HTML الرئيسي
├── package.json         # معلومات المشروع والمكتبات
├── tsconfig.json        # إعدادات TypeScript
├── vite.config.ts       # إعدادات Vite
└── README.md            # هذا الملف
```

---

## 🛍️ الأقسام

### مستلزمات البيلياردو 🎱
- كرات بيلياردو
- عصي (ستيكات)
- طباشير Master
- قماش الطاولات
- جسور Rest
- قطع غيار

### مستلزمات بابي فوت ⚽
- كرات بابي فوت
- مقابض
- قضبان اللاعبين
- مجسمات اللاعبين
- نوابض
- قطع غيار

---

## 📞 معلومات الاتصال

- **الهاتف:** 0717657640
- **الموقع:** المغرب 🇲🇦
- **واتساب:** [اضغط هنا للطلب](https://wa.me/212717657640)

---

## 🎨 تخصيص المشروع

### تغيير الألوان

يمكنك تعديل الألوان في ملف `src/App.tsx` من خلال فئات Tailwind CSS:

```tsx
// تغيير اللون الأخضر
bg-green-600 → bg-blue-600
text-green-400 → text-blue-400
```

### إضافة منتجات جديدة

أضف منتجات جديدة في مصفوفات `billiardProducts` و `babyFootProducts`:

```tsx
{
  id: 13,
  name: 'اسم المنتج',
  price: 100,
  image: '🎱',
  description: 'وصف المنتج',
  category: 'billiard'
}
```

---

## 📱 النشر على GitHub Pages

1. **تثبيت gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **إضافة scripts في package.json**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **النشر**
```bash
npm run deploy
```

---

## 📄 الترخيص

هذا المشروع مرخص بموجب ترخيص MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 💻 المطور

**Billiard Store Morocco**

- الموقع: المغرب
- الهاتف: 0717657640

---

## 🙏 شكر وتقدير

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WhatsApp Business API](https://business.whatsapp.com/)

---

<p align="center">
  <strong>🎱 Billiard Store Morocco - كل ما تحتاجه لطاولة البيلياردو وبابي فوت</strong>
</p>
