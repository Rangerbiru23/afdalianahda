'use client'

import { ArrowLeft, FileText, ShoppingCart, Package, CreditCard, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Syarat dan Ketentuan
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              AFDALIA NAHDA - Ketentuan Penggunaan Layanan
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: 1 Desember 2024
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di AFDALIA NAHDA. Dengan mengakses dan menggunakan website serta layanan kami, 
                Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Harap baca dengan seksama sebelum 
                melakukan pembelian produk pakaian dari toko eceran kami.
              </p>
            </section>

            {/* Product Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Package className="w-6 h-6 mr-2 text-purple-600" />
                Informasi Produk
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Keterangan Produk:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Semua produk yang ditampilkan adalah pakaian eceran berkualitas</li>
                  <li>Kami berusaha menyajikan foto produk yang akurat, namun warna dapat sedikit berbeda</li>
                  <li>Stok produk tersedia terbatas dan dapat berubah sewaktu-waktu</li>
                  <li>Ukuran pakaian mengikuti standar Indonesia</li>
                  <li>Deskripsi produk dibuat seakurat mungkin</li>
                </ul>
              </div>
            </section>

            {/* Ordering Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-2 text-purple-600" />
                Proses Pemesanan
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Cara Pemesanan:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pilih produk yang diinginkan</li>
                    <li>• Tentukan ukuran dan jumlah</li>
                    <li>• Masukkan keranjang belanja</li>
                    <li>• Isi data pengiriman</li>
                    <li>• Pilih metode pembayaran</li>
                    <li>• Konfirmasi pesanan</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Konfirmasi Pesanan:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Email konfirmasi otomatis</li>
                    <li>• Nomor pesanan unik</li>
                    <li>• Estimasi waktu pengiriman</li>
                    <li>• Detail pembelian</li>
                    <li>• Status tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-purple-600" />
                Pembayaran
              </h2>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Metode Pembayaran:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Transfer Bank (BCA, Mandiri, BNI, BRI)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">E-Wallet (GoPay, OVO, DANA, LinkAja)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">QRIS (Quick Response Code Indonesian Standard)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Cash on Delivery (COD) - Area tertentu</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white/70 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Penting:</strong> Pembayaran harus dilakukan dalam 24 jam setelah pemesanan. 
                    Pesanan akan otomatis dibatalkan jika pembayaran tidak terkonfirmasi.
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Pengiriman</h2>
              <p className="text-gray-600 mb-4">AFDALIA NAHDA menyediakan layanan pengiriman:</p>
              <div className="space-y-3">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700">Reguler (3-7 hari kerja)</h4>
                  <p className="text-gray-600">Rp 15.000 - Rp 30.000 (tergantung lokasi)</p>
                </div>
                <div className="bg-white border-2 border-pink-200 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700">Ekspres (1-3 hari kerja)</h4>
                  <p className="text-gray-600">Rp 25.000 - Rp 50.000 (tergantung lokasi)</p>
                </div>
                <div className="bg-white border-2 border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700">Same Day (Kota Makassar)</h4>
                  <p className="text-gray-600">Rp 20.000 (pengiriman hari yang sama)</p>
                </div>
              </div>
            </section>

            {/* Returns */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 mr-2 text-purple-600" />
                Pengembalian Produk
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Kebijakan Pengembalian:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-700">Syarat Pengembalian:</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>Produk dikembalikan dalam 7 hari setelah penerimaan</li>
                      <li>Label harga masih terpasang</li>
                      <li>Produk tidak digunakan, tidak dicuci, tidak rusak</li>
                      <li>Packaging asli masih utuh</li>
                      <li>Bukti pembelian dilampirkan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700">Alasan Pengembalian yang Diterima:</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                      <li>Produk cacat produksi</li>
                      <li>Ukuran tidak sesuai (selisih lebih dari 2cm)</li>
                      <li>Warna sangat berbeda dengan foto</li>
                      <li>Produk salah dikirim</li>
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Proses Pengembalian:</strong> Hubungi customer service kami untuk mendapatkan 
                      nomor otorisasi pengembalian. Pengembalian akan diproses dalam 3-5 hari kerja setelah 
                      produk diterima kembali.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                Aktivitas yang Dilarang
              </h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">Pengguna website AFDALIA NAHDA dilarang:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Menggunakan website untuk kegiatan ilegal</li>
                  <li>Membuat akun palsu atau menggunakan identitas orang lain</li>
                  <li>Mengganggu kelancaran operasional website</li>
                  <li>Menyalin konten atau gambar produk tanpa izin</li>
                  <li>Melakukan pembelian dengan niat penipuan</li>
                  <li>Mencoba meretas atau membob sistem keamanan</li>
                  <li>Menyebarkan virus atau malware</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed">
                Semua konten di website AFDALIA NAHDA, termasuk namun tidak terbatas pada logo, desain, 
                gambar produk, teks, dan grafis, merupakan hak milik AFDALIA NAHDA dan dilindungi oleh 
                hukum hak cipta. Tidak ada bagian dari website ini yang boleh direproduksi tanpa izin tertulis.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 leading-relaxed">
                AFDALIA NAHDA tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang 
                timbul dari penggunaan website kami, termasuk namun tidak terbatas pada kehilangan data, 
                kerugian finansial, atau gangguan bisnis. Tanggung jawab maksimal kami sebatas nilai 
                pembelian produk.
              </p>
            </section>

            {/* Force Majeure */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed">
                AFDALIA NAHDA tidak bertanggung jawab atas keterlambatan atau kegagalan pemenuhan 
                kewajiban yang disebabkan oleh kejadian di luar kendali kami, termasuk bencana alam, 
                perang, kerusuhan, pemogokan, atau gangguan jaringan telekomunikasi.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                AFDALIA NAHDA berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan 
                diumumkan melalui website dan/atau email. Penggunaan berkelanjutan layanan kami 
                menunjukkan penerimaan Anda terhadap perubahan tersebut.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-purple-700">Email:</span>
                    <span className="ml-2 text-gray-700">legal@afdalianahda.com</span>
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

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Hukum yang Berlaku</h2>
              <p className="text-gray-600 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Sengketa yang timbul akan diselesaikan melalui perundingan atau melalui pengadilan negeri 
                di Kota Makassar.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Terima kasih telah berbelanja di AFDALIA NAHDA.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Dengan menggunakan layanan kami, Anda mengakui telah membaca, memahami, dan menyetujui 
              Syarat dan Ketentuan ini.
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