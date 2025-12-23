'use client'

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kebijakan Privasi
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              AFDALIA NAHDA - Perlindungan Data Pribadi Anda
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: 1 Desember 2024
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-purple-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di AFDALIA NAHDA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                saat Anda berinteraksi dengan toko pakaian eceran kami.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-purple-600" />
                Pengumpulan Data
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Nama lengkap dan informasi kontak (telepon, email)</li>
                  <li>Alamat pengiriman dan penagihan</li>
                  <li>Informasi pembayaran (diproses secara aman)</li>
                  <li>Riwayat pembelian dan preferensi produk</li>
                  <li>Data penggunaan website dan interaksi dengan layanan kami</li>
                  <li>Informasi demografis untuk analisis pasar</li>
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-2 text-purple-600" />
                Penggunaan Data
              </h2>
              <p className="text-gray-600 mb-4">Kami menggunakan data pribadi Anda untuk:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Layanan Pelanggan</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Memproses pesanan Anda</li>
                    <li>• Mengirimkan konfirmasi pembelian</li>
                    <li>• Memberikan update pengiriman</li>
                    <li>• Menangani pertanyaan dan keluhan</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Peningkatan Layanan</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Menganalisis preferensi produk</li>
                    <li>• Mengembangkan koleksi baru</li>
                    <li>• Memberikan penawaran personal</li>
                    <li>• Meningkatkan pengalaman belanja</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-purple-600" />
                Keamanan Data
              </h2>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  AFDALIA NAHDA melindungi data Anda dengan:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Enkripsi data end-to-end untuk semua transaksi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Server aman dengan firewall dan monitoring 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Akses terbatas untuk data pelanggan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Backup data terenkripsi secara berkala</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Cookies membantu kami 
                mengingat preferensi Anda, menganalisis traffic website, dan menyediakan konten yang relevan. 
                Anda dapat mengatur preferensi cookies melalui browser Anda.
              </p>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Pihak Ketiga</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Kami hanya berbagi informasi 
                dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Penyedia jasa pengiriman untuk pengiriman produk</li>
                <li>Payment gateway untuk pemrosesan pembayaran</li>
                <li>Otoritas hukum jika diwajibkan oleh undang-undang</li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Hak Anda</h2>
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">Sebagai pelanggan, Anda memiliki hak untuk:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">▸</span>
                    <span className="text-gray-700">Mengakses data pribadi Anda</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">▸</span>
                    <span className="text-gray-700">Memperbarui informasi yang tidak akurat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">▸</span>
                    <span className="text-gray-700">Menghapus akun dan data pribadi</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">▸</span>
                    <span className="text-gray-700">Menolak pemasaran langsung</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin melaksanakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-purple-700">Email:</span>
                    <span className="ml-2 text-gray-700">privacy@afdalianahda.com</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Telepon:</span>
                    <span className="ml-2 text-gray-700">085285703526</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Alamat:</span>
                    <span className="ml-2 text-gray-700">JL.DG REGGE 1 NO.57, Rappojawa, Tallo, Makassar</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Pembaruan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                AFDALIA NAHDA dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diumumkan melalui website kami atau email. Penggunaan berkelanjutan dari layanan kami 
                menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Terima kasih telah mempercayai AFDALIA NAHDA dengan data pribadi Anda.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Kembali ke Beranda
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}