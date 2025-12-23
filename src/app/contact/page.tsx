'use client'

import { useState } from 'react'
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, WhatsApp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-3 text-purple-600" />
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AFDALIA NAHDA
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl opacity-90">
            Kami siap membantu Anda menemukan pakaian impian
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Informasi Kontak
                </span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Alamat Toko</h3>
                    <p className="text-gray-600">
                      JL.DG REGGE 1 NO.57<br />
                      Desa/Kelurahan Rappojawa<br />
                      Kec. Tallo, Kota Makassar<br />
                      Provinsi Sulawesi Selatan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Telepon</h3>
                    <p className="text-gray-600">085285703526</p>
                    <p className="text-sm text-gray-500">WhatsApp tersedia</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@afdalianahda.com</p>
                    <p className="text-sm text-gray-500">cs@afdalianahda.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Jam Buka</h3>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Senin - Jumat:</span>
                        <span>09:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu:</span>
                        <span>09:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu:</span>
                        <span>10:00 - 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                    <WhatsApp className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-6 space-y-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                <h3 className="font-bold text-purple-800 mb-2">🎉 Promo Spesial</h3>
                <p className="text-purple-700 text-sm mb-3">
                  Dapatkan diskon 10% untuk pembelian pertama Anda!
                </p>
                <p className="text-xs text-purple-600">
                  Gunakan kode: <span className="font-bold">AFDALIA10</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
                <h3 className="font-bold text-amber-800 mb-2">🚚 Pengiriman Gratis</h3>
                <p className="text-amber-700 text-sm">
                  Gratis ongkir untuk pembelian minimal Rp 500.000
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Kirim Pesan
                </span>
              </h2>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <p className="text-green-700">Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="08123456789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="info">Informasi Produk</option>
                      <option value="order">Status Pesanan</option>
                      <option value="return">Pengembalian Produk</option>
                      <option value="complaint">Keluhan</option>
                      <option value="suggestion">Saran</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Wajib diisi
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pertanyaan yang Sering Diajukan
                </span>
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">Bagaimana cara memesan produk?</h3>
                  <p className="text-gray-600">
                    Anda dapat memesan melalui website kami, WhatsApp, atau datang langsung ke toko. 
                    Pilih produk, tambahkan ke keranjang, dan selesaikan pembayaran.
                  </p>
                </div>

                <div className="border-l-4 border-pink-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">Apakah ada pengiriman ke luar kota?</h3>
                  <p className="text-gray-600">
                    Ya, kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">Bagaimana kebijakan pengembalian?</h3>
                  <p className="text-gray-600">
                    Produk dapat dikembalikan dalam 7 hari dengan kondisi masih baru, label lengkap, 
                    dan packaging utuh.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">Apakah ada diskon untuk pembelian grosir?</h3>
                  <p className="text-gray-600">
                    Ya, kami menyediakan harga khusus untuk pembelian grosir. Hubungi kami untuk info lebih lanjut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h2 className="text-2xl font-bold">Lokasi Toko</h2>
              <p className="opacity-90">Temukan kami di Google Maps</p>
            </div>
            <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-700 mb-2">AFDALIA NAHDA</h3>
                <p className="text-gray-600 mb-4">
                  JL.DG REGGE 1 NO.57, Rappojawa, Tallo, Makassar
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Buka di Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Segera?</h2>
          <p className="text-xl mb-6 opacity-90">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6285285703526"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <WhatsApp className="w-5 h-5 mr-2" />
              WhatsApp Kami
            </a>
            <a 
              href="tel:085285703526"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}