<div align="center">

# 🎱 Billiard Store Morocco

### متجر مستلزمات البيلياردو والبابي فوت في المغرب

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

![Preview](https://img.shields.io/badge/Status-Ready-brightgreen?style=for-the-badge)

موقع تجاري احترافي لبيع مستلزمات البيلياردو والبابي فوت في المغرب
**HTML + CSS + JavaScript فقط** — بدون أي مكتبات أو إطارات عمل

</div>

---

## 📸 معاينة

| الصفحة الرئيسية | المنتجات | التواصل |
|:---:|:---:|:---:|
| Hero Section | Products Grid | Contact Cards |
| واجهة ترحيبية | شبكة منتجات مع فلاتر | بطاقات تواصل |

## ✨ المميزات

- 🎨 **تصميم احترافي** — واجهة أنيقة بألوان أسود + أخضر + أبيض
- 📱 **متجاوب بالكامل** — يعمل على جميع الأجهزة (هاتف، تابلت، حاسوب)
- 🇲🇦 **دعم عربي كامل** — واجهة RTL مع خط Cairo العربي
- 💬 **تكامل واتساب** — أزرار طلب مباشرة عبر واتساب
- ⚡ **سرعة عالية** — HTML/CSS/JS خام بدون مكتبات ثقيلة
- 🎯 **ملف واحد** — كل شيء في `index.html` فقط
- 🖼️ **صور مولّدة بالذكاء الاصطناعي** — صور منتجات احترافية
- 🚀 **جاهز للنشر** — ارفعه مباشرة على GitHub Pages أو أي استضافة

## 🛒 الأقسام

| القسم | المنتجات |
|-------|----------|
| 🎱 **مستلزمات البيلياردو** | كرات، ستيكات، طباشير Master، قماش الطاولات، جسور Rest، قطع غيار |
| ⚽ **مستلزمات بابي فوت** | كرات، مقابض، قضبان، مجسمات، نوابض، قطع غيار |

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| **HTML5** | هيكل الصفحة الدلالي |
| **CSS3** | تنسيق الأنماط مع Flexbox و Grid و Animations |
| **JavaScript** | تفاعلات: فلاتر، قائمة موبايل، تأثيرات التمرير |
| **Google Fonts** | خط Cairo العربي |
| **WhatsApp API** | تكامل الطلبات عبر واتساب |

## 📁 هيكل المشروع

```
billiard-store-morocco/
├── index.html                    ← الملف الرئيسي (كل شيء هنا!)
├── images/
│   ├── hero.jpg                  # صورة الخلفية الرئيسية
│   ├── billiard-ball.jpg         # صورة كرة البيلياردو
│   ├── cue-stick.jpg             # صورة الستيك
│   ├── chalk.jpg                 # صورة الطباشير
│   ├── foosball.jpg              # صورة طاولة البابي فوت
│   ├── foosball-ball.jpg         # صورة كرة البابي فوت
│   └── foosball-handle.jpg       # صورة المقبض
├── README.md                     # هذا الملف
├── LICENSE                       # رخصة MIT
└── .gitignore                    # ملفات Git المتجاهلة
```

## 🚀 التشغيل والنشر

### الطريقة 1: فتح مباشر
```bash
# فقط افتح index.html في المتصفح
open index.html
# أو
start index.html
```

### الطريقة 2: GitHub Pages
```bash
# 1. أنشئ مستودع على GitHub
# 2. ارفع الملفات
git init
git add .
git commit -m "🎱 Billiard Store Morocco"
git branch -M main
git remote add origin https://github.com/USERNAME/billiard-store-morocco.git
git push -u origin main

# 3. فعّل GitHub Pages من Settings > Pages > Deploy from main branch
```

### الطريقة 3: أي استضافة
ارفع الملفات مباشرة إلى أي استضافة تدعم HTML:
- **Netlify** — اسحب وأفلت المجلد
- **Vercel** — ربط مع GitHub
- **InfinityFree** — رفع عبر FTP
- **000webhost** — رفع عبر لوحة التحكم

## ⚙️ التخصيص

### تغيير رقم واتساب
ابحث في `index.html` عن `212717657640` واستبدله برقمك:
```
CTRL + H → استبدال: 212717657640 → رقمك الجديد
```

### إضافة منتج جديد
انسخ كتلة `product-card` في قسم المنتجات وعدّل البيانات:
```html
<div class="card product-card" data-category="billiard">
    <div class="product-image">
        <img src="./images/your-image.jpg" alt="اسم المنتج" loading="lazy">
        <div class="product-image-overlay"></div>
        <span class="product-badge">🎱 بيلياردو</span>
        <span class="product-price">100 DH</span>
    </div>
    <div class="product-info">
        <h3>اسم المنتج</h3>
        <p>وصف المنتج</p>
        <a href="رابط واتساب" ...>اطلب الآن</a>
    </div>
</div>
```

### تغيير الألوان
عدّل المتغيرات في أعلى CSS داخل `index.html`:
```css
:root {
    --green: #22c55e;       /* اللون الأخضر الرئيسي */
    --green-dark: #15803d;  /* الأخضر الداكن */
    --black: #0a0a0a;       /* الخلفية السوداء */
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
