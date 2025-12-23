'use client'

import { useState } from 'react'
import { ArrowLeft, ShoppingCart, Filter, Search, Star, Heart, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSize, setSelectedSize] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'gamis', name: 'Gamis' },
    { id: 'kemeja', name: 'Kemeja' },
    { id: 'rok', name: 'Rok' },
    { id: 'celana', name: 'Celana' },
    { id: 'hijab', name: 'Hijab' },
    { id: 'aksesoris', name: 'Aksesoris' }
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const products = [
    {
      id: 1,
      name: 'Gamis Modern Premium',
      category: 'gamis',
      price: 285000,
      originalPrice: 350000,
      image: 'gamis1',
      rating: 4.8,
      reviews: 124,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['black', 'navy', 'maroon'],
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Kemeja Casual Cotton',
      category: 'kemeja',
      price: 185000,
      originalPrice: 220000,
      image: 'kemeja1',
      rating: 4.9,
      reviews: 89,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['white', 'blue', 'grey'],
      badge: 'New'
    },
    {
      id: 3,
      name: 'Rok Wanita Maxi',
      category: 'rok',
      price: 155000,
      originalPrice: 180000,
      image: 'rok1',
      rating: 4.7,
      reviews: 67,
      sizes: ['S', 'M', 'L'],
      colors: ['black', 'brown', 'cream'],
      badge: 'Sale'
    },
    {
      id: 4,
      name: 'Hijab Premium Voal',
      category: 'hijab',
      price: 95000,
      originalPrice: 120000,
      image: 'hijab1',
      rating: 4.9,
      reviews: 203,
      sizes: ['All Size'],
      colors: ['pastel', 'dark', 'bright'],
      badge: 'Popular'
    },
    {
      id: 5,
      name: 'Celana Kulot Modern',
      category: 'celana',
      price: 175000,
      originalPrice: null,
      image: 'celana1',
      rating: 4.6,
      reviews: 45,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['black', 'navy', 'grey'],
      badge: null
    },
    {
      id: 6,
      name: 'Gamis Syar\\\'i Luxury',
      category: 'gamis',
      price: 425000,
      originalPrice: 500000,
      image: 'gamis2',
      rating: 5.0,
      reviews: 78,
      sizes: ['M', 'L', 'XL'],
      colors: ['gold', 'silver', 'black'],
      badge: 'Premium'
    },
    {
      id: 7,
      name: 'Kemeja Batik Modern',
      category: 'kemeja',
      price: 225000,
      originalPrice: null,
      image: 'kemeja2',
      rating: 4.8,
      reviews: 92,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['brown', 'blue', 'red'],
      badge: null
    },
    {
      id: 8,
      name: 'Rok Plisket Premium',
      category: 'rok',
      price: 195000,
      originalPrice: 250000,
      image: 'rok2',
      rating: 4.7,
      reviews: 156,
      sizes: ['S', 'M', 'L'],
      colors: ['black', 'navy', 'maroon'],
      badge: 'Trending'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesSearch && matchesPrice
  })

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Best Seller': return 'bg-gradient-to-r from-yellow-400 to-orange-400'
      case 'New': return 'bg-gradient-to-r from-green-400 to-emerald-400'
      case 'Sale': return 'bg-gradient-to-r from-red-400 to-pink-400'
      case 'Popular': return 'bg-gradient-to-r from-purple-400 to-indigo-400'
      case 'Premium': return 'bg-gradient-to-r from-amber-400 to-yellow-400'
      case 'Trending': return 'bg-gradient-to-r from-pink-400 to-rose-400'
      default: return 'bg-gradient-to-r from-blue-400 to-cyan-400'
    }
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
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Koleksi Produk AFDALIA NAHDA
          </h1>
          <p className="text-xl opacity-90">
            Temukan pakaian impian Anda dengan kualitas premium dan desain terkini
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filter</h3>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Kategori</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-purple-600"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Ukuran</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? 'all' : size)}
                      className={`py-2 px-3 rounded-lg border ${
                        selectedSize === size 
                          ? 'bg-purple-600 text-white border-purple-600' 
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rentang Harga</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Minimum: Rp {priceRange[0].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Maximum: Rp {priceRange[1].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedSize('all')
                  setPriceRange([0, 500000])
                  setSearchQuery('')
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden mb-4 bg-white rounded-lg shadow p-3 flex items-center justify-center w-full"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter Produk
            </button>

            {/* Results Header */}
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Menampilkan <span className="font-semibold">{filteredProducts.length}</span> produk
              </p>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Urutkan: Terbaru</option>
                <option>Urutkan: Harga Terendah</option>
                <option>Urutkan: Harga Tertinggi</option>
                <option>Urutkan: Rating Tertinggi</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
                  {/* Product Image */}
                  <div className="relative h-80 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    {product.badge && (
                      <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                        {product.badge}
                      </div>
                    )}
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <div className="h-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-purple-400">{product.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-600">Rp {product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">Rp {product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm text-green-600 font-semibold">
                          Hemat {Math.round((1 - product.price/product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>

                    {/* Sizes */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Ukuran: {product.sizes.join(', ')}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow font-semibold">
                        <ShoppingCart className="w-4 h-4 inline mr-2" />
                        Tambah
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Produk Tidak Ditemukan</h3>
                <p className="text-gray-600 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedSize('all')
                    setPriceRange([0, 500000])
                    setSearchQuery('')
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Dapatkan Penawaran Eksklusif</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe newsletter AFDALIA NAHDA dan dapatkan diskon 10% untuk pembelian pertama Anda
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-r-lg font-semibold hover:shadow-lg transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}