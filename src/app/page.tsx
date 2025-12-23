'use client'

import { useState } from 'react'
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Star, ChevronRight, Sparkles, Package, Truck, Shield } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AFDALIA NAHDA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</a>
              <a href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</a>
              <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Beranda</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Tentang</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Koleksi Terbaru 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                AFDALIA NAHDA
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Temukan Gaya Anda dengan Koleksi Pakaian Premium
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Busana eceran berkualitas dengan desain terkini yang mempercantik penampilan Anda setiap hari
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Lihat Koleksi
                <ChevronRight className="w-5 h-5 inline ml-2" />
              </a>
              <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Promo Spesial
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">Bahan pilihan dengan kualitas terbaik untuk kenyamanan maksimal</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman aman dan cepat ke seluruh Indonesia</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garansi Kepuasan</h3>
              <p className="text-gray-600">Jaminan kepuasan 100% untuk setiap pembelian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Koleksi Unggulan
              </span>
            </h2>
            <p className="text-xl text-gray-600">Temukan pakaian impian Anda dari koleksi kami</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Gamis Modern", price: "Rp 250.000", rating: 4.8, image: "dress" },
              { name: "Kemeja Casual", price: "Rp 180.000", rating: 4.9, image: "shirt" },
              { name: "Rok Wanita", price: "Rp 150.000", rating: 4.7, image: "skirt" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                    <Package className="w-16 h-16 text-purple-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600 mb-4">{product.price}</p>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tentang AFDALIA NAHDA
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AFDALIA NAHDA adalah toko pakaian eceran terpercaya yang menyediakan berbagai macam busana berkualitas dengan desain terkini. Kami berkomitmen untuk memberikan produk terbaik dengan harga yang terjangkau.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Dengan pengalaman dalam industri fashion, kami memahami kebutuhan pelanggan akan pakaian yang nyaman, modis, dan berkualitas tinggi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-2xl text-purple-600">1000+</h4>
                  <p className="text-gray-600">Pelanggan Puas</p>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-pink-600">500+</h4>
                  <p className="text-gray-600">Model Pakaian</p>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-purple-600">AN</span>
                </div>
                <p className="text-xl font-semibold text-purple-700">Fashion Terkini</p>
                <p className="text-gray-600">Kualitas Terjamin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600">Kunjungi toko kami atau hubungi untuk informasi lebih lanjut</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">JL.DG REGGE 1 NO.57, Desa/Kelurahan Rappojawa, Kec. Tallo, Kota Makassar, Provinsi Sulawesi Selatan</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">085285703526</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@afdalianahda.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Jam Buka</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>09:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>09:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>10:00 - 20:00</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/20 rounded-lg">
                <p className="text-center font-semibold">
                  🎉 Dapatkan diskon 10% untuk pembelian pertama!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">A</span>
                </div>
                <span className="ml-3 text-xl font-bold">AFDALIA NAHDA</span>
              </div>
              <p className="text-purple-200">Toko pakaian eceran terpercaya dengan koleksi fashion terkini.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-purple-200">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#products" className="hover:text-white">Produk</a></li>
                <li><a href="#contact" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Pengiriman Nationwide</li>
                <li>Garansi Kepuasan</li>
                <li>Promo Bulanan</li>
                <li>Customer Support 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-purple-200 mb-4">Dapatkan penawaran terbaru dari kami</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 AFDALIA NAHDA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}