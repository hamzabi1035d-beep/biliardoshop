import { useState, useEffect } from "react";

// ============ DATA ============
const WHATSAPP_NUMBER = "212717657640";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "billiard" | "foosball";
}

const products: Product[] = [
  {
    id: 1,
    name: "كرة بيلياردو احترافية",
    price: 250,
    description: "كرة بيلياردو احترافية عالية الجودة، مصنوعة من الراتينج الممتاز لضمان أداء مثالي",
    image: "/images/billiard-ball.jpg",
    category: "billiard",
  },
  {
    id: 2,
    name: "ستيك بيلياردو",
    price: 350,
    description: "ستيك بيلياردو خشبي احترافي بتصميم مريح وقوة دقة عالية في اللعب",
    image: "/images/cue-stick.jpg",
    category: "billiard",
  },
  {
    id: 3,
    name: "طباشير Master",
    price: 25,
    description: "طباشير Master الأصلي لضمان أفضل أداء في اللعب، مقاوم للتفتت",
    image: "/images/chalk.jpg",
    category: "billiard",
  },
  {
    id: 4,
    name: "كرة بابي فوت",
    price: 30,
    description: "كرة بابي فوت متينة وعالية الجودة، مناسبة للاستخدام المكثف",
    image: "/images/foosball-ball.jpg",
    category: "foosball",
  },
  {
    id: 5,
    name: "مقبض بابي فوت",
    price: 40,
    description: "مقبض بابي فوت مريح وصديق للبيئة، تصميم محكم لضمان قبضة ممتازة",
    image: "/images/foosball-handle.jpg",
    category: "foosball",
  },
];

const billiardCategories = [
  { icon: "⚪", name: "كرات بيلياردو" },
  { icon: "🥢", name: "عصي (ستيكات)" },
  { icon: "🟦", name: "طباشير Master" },
  { icon: "🟩", name: "قماش الطاولات" },
  { icon: "🌉", name: "جسور Rest" },
  { icon: "🔧", name: "قطع غيار" },
];

const foosballCategories = [
  { icon: "⚽", name: "كرات بابي فوت" },
  { icon: "🤚", name: "مقابض" },
  { icon: "🔩", name: "قضبان اللاعبين" },
  { icon: "🧑", name: "مجسمات اللاعبين" },
  { icon: "🌀", name: "نوابض" },
  { icon: "🔧", name: "قطع غيار" },
];

// ============ COMPONENTS ============

function WhatsAppButton({ product }: { product?: Product }) {
  const message = product
    ? `مرحبا، أريد طلب: ${product.name} - ${product.price} DH`
    : "مرحبا، أريد الاستفسار عن المنتجات";
  const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {product ? "اطلب الآن" : "اطلب عبر واتساب"}
    </a>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#categories", label: "الأقسام" },
    { href: "#products", label: "المنتجات" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="text-4xl group-hover:animate-float">🎱</span>
            <div>
              <h1 className="text-white font-bold text-lg sm:text-xl leading-tight">
                Billiard Store
              </h1>
              <p className="text-green-400 text-xs font-medium">Morocco 🇲🇦</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أريد الاستفسار عن المنتجات")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105"
            >
              📞 تواصل معنا
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-md rounded-2xl p-4 border border-green-900/30 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-green-400 hover:bg-white/5 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أريد الاستفسار عن المنتجات")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl font-bold transition-all duration-300"
              >
                📞 تواصل معنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
             متجر معتمد في المغرب 🇲🇦
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            🎲{" "}
            <span className="text-gradient">متجر البيلياردو</span>
            <br />
            <span className="text-white">في المغرب</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            كل ما تحتاجه لطاولة البيلياردو وبابي فوت
            <br />
            <span className="text-green-400 font-semibold">
              جودة عالية وأسعار تنافسية مع التوصيل لجميع المدن
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="group bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center gap-3"
            >
              تصفح المنتجات
              <svg
                className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <WhatsAppButton />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in">
          {[
            { value: "+500", label: "عميل سعيد" },
            { value: "+200", label: "منتج متوفر" },
            { value: "24/7", label: "خدمة العملاء" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-green-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-green-400/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-green-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  icon,
  title,
  items,
  gradient,
  delay,
}: {
  icon: string;
  title: string;
  items: { icon: string; name: string }[];
  gradient: string;
  delay: number;
}) {
  return (
    <div
      className="card-hover bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`w-20 h-20 rounded-2xl ${gradient} flex items-center justify-center text-4xl mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 py-2 px-3 rounded-xl hover:bg-white/5"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-green-500/20">
            📂 الأقسام
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            تصفح حسب <span className="text-gradient">القسم</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نوفر لكم كل ما تحتاجونه من مستلزمات البيلياردو والبابي فوت
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CategoryCard
            icon="🎱"
            title="مستلزمات البيلياردو"
            items={billiardCategories}
            gradient="bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-800/30"
            delay={0}
          />
          <CategoryCard
            icon="⚽"
            title="مستلزمات بابي فوت"
            items={foosballCategories}
            gradient="bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-800/30"
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="card-hover bg-gradient-to-br from-gray-900/90 to-black border border-gray-800/50 rounded-3xl overflow-hidden transition-all duration-500 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/60 backdrop-blur-sm text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">
            {product.category === "billiard" ? "🎱 بيلياردو" : "⚽ بابي فوت"}
          </span>
        </div>

        {/* Price badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-green-600 text-white text-lg font-black px-4 py-2 rounded-xl shadow-lg shadow-green-600/30">
            {product.price} DH
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {product.description}
        </p>
        <WhatsAppButton product={product} />
      </div>
    </div>
  );
}

function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "billiard" | "foosball">("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const filters = [
    { key: "all" as const, label: "الكل", icon: "🏪" },
    { key: "billiard" as const, label: "بيلياردو", icon: "🎱" },
    { key: "foosball" as const, label: "بابي فوت", icon: "⚽" },
  ];

  return (
    <section id="products" className="py-20 sm:py-28 relative bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-green-500/20">
            🛒 المنتجات
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            أحدث <span className="text-gradient">المنتجات</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا المتميزة من مستلزمات البيلياردو وبابي فوت
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/25 scale-105"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
            <div className="text-center sm:text-right">
              <h3 className="text-xl font-bold text-white mb-1">
                لم تجد ما تبحث عنه؟
              </h3>
              <p className="text-gray-400 text-sm">
                تواصل معنا وسنجد لك ما تحتاج
              </p>
            </div>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden green-glow">
              <img
                src="/images/foosball.jpg"
                alt="Billiard Store Morocco"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 sm:left-auto sm:-right-6 bg-green-600 text-white rounded-2xl p-5 shadow-xl shadow-green-600/30 animate-float">
              <div className="text-3xl font-black">+5</div>
              <div className="text-sm font-medium">سنوات خبرة</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-green-500/20">
              🏢 من نحن
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              شريكك الموثوق في عالم
              <br />
              <span className="text-gradient">البيلياردو والبابي فوت</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              نحن متخصصون في بيع جميع مستلزمات البيلياردو وبابي فوت داخل
              المغرب مع إمكانية الشحن لجميع المدن. نوفر لكم منتجات عالية
              الجودة من أفضل العلامات التجارية العالمية بأسعار تنافسية.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🚚", title: "شحن سريع", desc: "لجميع المدن المغربية" },
                { icon: "✅", title: "جودة عالية", desc: "منتجات أصلية ومعتمدة" },
                { icon: "💰", title: "أسعار تنافسية", desc: "أفضل الأسعار في المغرب" },
                { icon: "🎯", title: "خدمة متميزة", desc: "دعم فني وخدمة ما بعد البيع" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-4 hover:border-green-600/30 transition-colors duration-300"
                >
                  <span className="text-3xl mb-2 block">{feature.icon}</span>
                  <h4 className="text-white font-bold text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-black via-gray-950 to-black relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-green-500/20">
            📞 اتصل بنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            تواصل <span className="text-gradient">معنا</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نسعد بتواصلكم معنا للاستفسار أو الطلب
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+212717657640"
            className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 text-center hover:border-green-600/50 transition-all duration-500 card-hover"
          >
            <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600/20 transition-colors duration-300">
              <span className="text-4xl">📞</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">الهاتف</h3>
            <p className="text-green-400 font-bold text-lg" dir="ltr">
              0717657640
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أريد الاستفسار عن المنتجات")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 text-center hover:border-green-600/50 transition-all duration-500 card-hover"
          >
            <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600/20 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">واتساب</h3>
            <p className="text-green-400 font-bold">اطلب عبر واتساب</p>
          </a>

          {/* Location */}
          <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 text-center hover:border-green-600/50 transition-all duration-500 card-hover sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-600/20 transition-colors duration-300">
              <span className="text-4xl">📍</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">الموقع</h3>
            <p className="text-green-400 font-bold">المملكة المغربية 🇲🇦</p>
            <p className="text-gray-500 text-sm mt-1">الشحن لجميع المدن</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎱</span>
              <div>
                <h3 className="text-white font-bold text-lg">Billiard Store</h3>
                <p className="text-green-400 text-xs">Morocco 🇲🇦</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              متجرك الأول لجميع مستلزمات البيلياردو وبابي فوت في المغرب
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              {[
                { href: "#home", label: "الرئيسية" },
                { href: "#categories", label: "الأقسام" },
                { href: "#products", label: "المنتجات" },
                { href: "#about", label: "من نحن" },
                { href: "#contact", label: "اتصل بنا" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-500 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">المنتجات</h4>
            <div className="space-y-2">
              {[
                "كرات بيلياردو",
                "ستيكات",
                "طباشير",
                "كرات بابي فوت",
                "مقابض",
                "قطع غيار",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#products"
                  className="block text-gray-500 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+212717657640"
                className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm transition-colors"
              >
                <span>📞</span>
                <span dir="ltr">0717657640</span>
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>📍</span>
                <span>المغرب</span>
              </div>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أريد الاستفسار عن المنتجات")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors mt-2"
              >
                💬 تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Billiard Store Morocco. جميع الحقوق محفوظة
          </p>
          <p className="text-gray-700 text-xs">
            🇲🇦 صنع بكل ❤️ في المغرب
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أريد الاستفسار عن المنتجات")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 animate-pulse-glow bg-[#25D366] hover:bg-[#20bd5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 group"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute left-full mr-3 bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تواصل عبر واتساب 💬
      </span>
    </a>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
