import { useState } from 'react';

// Product data
const billiardProducts = [
  {
    id: 1,
    name: 'كرة بيلياردو احترافية',
    price: 250,
    image: '🎱',
    description: 'كرة بيلياردو عالية الجودة للاستخدام الاحترافي',
    category: 'billiard'
  },
  {
    id: 2,
    name: 'ستيك بيلياردو',
    price: 350,
    image: '🎱',
    description: 'عصا بيلياردو من الخشب الطبيعي الممتاز',
    category: 'billiard'
  },
  {
    id: 3,
    name: 'طباشير Master',
    price: 25,
    image: '🟢',
    description: 'طباشير عالي الجودة لتحسين الأداء',
    category: 'billiard'
  },
  {
    id: 4,
    name: 'قماش الطاولات',
    price: 450,
    image: '🟩',
    description: 'قماش أخضر احترافي لطاولات البيلياردو',
    category: 'billiard'
  },
  {
    id: 5,
    name: 'جسر Rest',
    price: 180,
    image: '🔧',
    description: 'جسر مساعد للضربات الصعبة',
    category: 'billiard'
  },
  {
    id: 6,
    name: 'قطع غيار بيلياردو',
    price: 120,
    image: '⚙️',
    description: 'مجموعة قطع غيار شاملة',
    category: 'billiard'
  }
];

const babyFootProducts = [
  {
    id: 7,
    name: 'كرة بابي فوت',
    price: 30,
    image: '⚽',
    description: 'كرة بابي فوت متينة وعالية الجودة',
    category: 'babyfoot'
  },
  {
    id: 8,
    name: 'مقبض بابي فوت',
    price: 40,
    image: '🎮',
    description: 'مقبض مريح ومقاوم للانزلاق',
    category: 'babyfoot'
  },
  {
    id: 9,
    name: 'قضبان اللاعبين',
    price: 200,
    image: '🔩',
    description: 'قضبان فولاذية قوية للاعبين',
    category: 'babyfoot'
  },
  {
    id: 10,
    name: 'مجسمات اللاعبين',
    price: 80,
    image: '👤',
    description: 'مجسمات لاعبين واقعية ومتينة',
    category: 'babyfoot'
  },
  {
    id: 11,
    name: 'نوابض بابي فوت',
    price: 50,
    image: '🌀',
    description: 'نوابض عالية الجودة للحركة السلسة',
    category: 'babyfoot'
  },
  {
    id: 12,
    name: 'قطع غيار بابي فوت',
    price: 150,
    image: '⚙️',
    description: 'مجموعة قطع غيار شاملة',
    category: 'babyfoot'
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'billiard' | 'babyfoot'>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = activeCategory === 'all' 
    ? [...billiardProducts, ...babyFootProducts]
    : activeCategory === 'billiard'
    ? billiardProducts
    : babyFootProducts;

  const handleWhatsAppOrder = (productName: string, price: number) => {
    const message = `مرحبا، أريد طلب: ${productName} - السعر: ${price} DH`;
    const whatsappUrl = `https://wa.me/212717657640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const whatsappUrl = 'https://wa.me/212717657640';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-black py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎱</span>
            <div>
              <h1 className="text-2xl font-bold text-white">Billiard Store Morocco</h1>
              <p className="text-green-400 text-sm">كل ما تحتاجه لطاولة البيلياردو وبابي فوت</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-white hover:text-green-400 transition-colors">الرئيسية</a>
            <a href="#products" className="text-white hover:text-green-400 transition-colors">المنتجات</a>
            <a href="#about" className="text-white hover:text-green-400 transition-colors">من نحن</a>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors">اتصل بنا</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900 py-4">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#home" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
              <a href="#products" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>المنتجات</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>من نحن</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-b from-green-900 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6 animate-pulse">🎱⚽</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            بيع جميع مستلزمات البيلياردو وبابي فوت
          </h2>
          <p className="text-xl text-green-400 mb-8 max-w-2xl mx-auto">
            بجودة عالية وأسعار تنافسية مع الشحن لجميع مدن المغرب
          </p>
          <a 
            href="#products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            تصفح المنتجات 🛒
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">الأقسام</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Billiard Category */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-green-800 hover:border-green-500 transition-all cursor-pointer" onClick={() => setActiveCategory('billiard')}>
              <div className="text-5xl mb-4">🎱</div>
              <h3 className="text-2xl font-bold text-white mb-4">مستلزمات البيلياردو</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• كرات بيلياردو</li>
                <li>• عصي (ستيكات)</li>
                <li>• طباشير Master</li>
                <li>• قماش الطاولات</li>
                <li>• جسور Rest</li>
                <li>• قطع غيار</li>
              </ul>
            </div>

            {/* Baby Foot Category */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-green-800 hover:border-green-500 transition-all cursor-pointer" onClick={() => setActiveCategory('babyfoot')}>
              <div className="text-5xl mb-4">⚽</div>
              <h3 className="text-2xl font-bold text-white mb-4">مستلزمات بابي فوت</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• كرات بابي فوت</li>
                <li>• مقابض</li>
                <li>• قضبان اللاعبين</li>
                <li>• مجسمات اللاعبين</li>
                <li>• نوابض</li>
                <li>• قطع غيار</li>
              </ul>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeCategory === 'all' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              الكل
            </button>
            <button
              onClick={() => setActiveCategory('billiard')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeCategory === 'billiard' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              🎱 البيلياردو
            </button>
            <button
              onClick={() => setActiveCategory('babyfoot')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeCategory === 'babyfoot' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              ⚽ بابي فوت
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-400">أحدث المنتجات</h2>
          <p className="text-center text-gray-400 mb-12">اختر المنتج المناسب واطلبه مباشرة عبر واتساب</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="h-48 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                  <span className="text-7xl">{product.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-400">{product.price} DH</span>
                    <button
                      onClick={() => handleWhatsAppOrder(product.name, product.price)}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-all text-sm"
                    >
                      اطلب الآن 📱
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-400">من نحن</h2>
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-green-800">
              <div className="text-6xl mb-6">🏪</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                نحن متخصصون في بيع جميع مستلزمات البيلياردو وبابي فوت داخل المغرب 
                مع إمكانية الشحن لجميع المدن. نوفر منتجات عالية الجودة بأسعار تنافسية 
                وخدمة عملاء متميزة.
              </p>
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚚</div>
                  <p className="text-green-400 font-bold">شحن سريع</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-green-400 font-bold">جودة مضمونة</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <p className="text-green-400 font-bold">أسعار منافسة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-black to-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">اتصل بنا</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-green-800">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <p className="text-gray-400">الهاتف</p>
                    <a href="tel:+212717657640" className="text-2xl font-bold text-green-400 hover:text-green-300">
                      0717657640
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <p className="text-gray-400">الموقع</p>
                    <p className="text-xl font-bold text-white">المغرب 🇲🇦</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <p className="text-gray-400">البريد الإلكتروني</p>
                    <a href="mailto:info@billiardstore.ma" className="text-xl font-bold text-green-400 hover:text-green-300">
                      info@billiardstore.ma
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleGeneralWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
                >
                  <span className="text-2xl">💬</span>
                  اطلب عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-green-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🎱</span>
            <span className="text-xl font-bold text-white">Billiard Store Morocco</span>
          </div>
          <p className="text-gray-400 mb-4">
            كل ما تحتاجه لطاولة البيلياردو وبابي فوت في مكان واحد
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#home" className="text-green-400 hover:text-green-300 transition-colors">الرئيسية</a>
            <a href="#products" className="text-green-400 hover:text-green-300 transition-colors">المنتجات</a>
            <a href="#about" className="text-green-400 hover:text-green-300 transition-colors">من نحن</a>
            <a href="#contact" className="text-green-400 hover:text-green-300 transition-colors">اتصل بنا</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Billiard Store Morocco. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212717657640"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
