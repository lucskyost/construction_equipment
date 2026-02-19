"use client";

import { useState, useMemo } from "react";
import { products, type Product } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Phone,
  Search,
  MapPin,
  Clock,
  CheckCircle2,
  Wrench,
  Truck,
  Headphones,
  Mail,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Facebook,
} from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage(product.image);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setSelectedImage("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER - Sticky */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-white rounded-lg p-2">
                <Building2 className="w-6 h-6 text-orange-500" />
              </div>
              <span
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                CÔNG HỘ
              </span>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm thiết bị..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-0 focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>

            {/* Call Button */}
            <a
              href="tel:0386660506"
              className="flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0386660506</span>
            </a>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Tìm kiếm thiết bị..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-0 focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative py-12 md:py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center  max-sm:bg-position-[65%_center] "
          style={{
            backgroundImage: "url('/assets/background2.png')",
            backgroundSize: "cover",
          }}
        />

        {/* Overlay tối */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Cho Thuê Thiết Bị Xây Dựng tại Vạn Tường, Quảng Ngãi
          </h1>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Nhận Thi Công Lu Đầm Nền Móng, Khoan cắt bê tông các loại
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto max-sm:whitespace-break-spaces">
            Máy móc chất lượng cao {"\n"}• Giao hàng tận nơi
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Thiết bị đa dạng</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Vận chuyển tận nơi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Hỗ trợ nhanh chóng</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
            <a
              href="tel:0386660506"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Gọi ngay: 0386660506
            </a>

            <a
              href="https://www.facebook.com/ho.cong.5011516"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Facebook className="w-5 h-5" />
              Liên hệ Facebook
            </a>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Công Hộ - Cho Thuê Thiết Bị Xây Dựng tại Vạn Tường, Quảng Ngãi
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              Chuyên cho thuê các thiết bị xây dựng như: xe lu, máy đầm cóc, máy
              đầm bàn, máy cắt đường, máy cắt bê tông, máy đục bê tông, máy
              khoan rút lõi, máy mài bê tông, máy trộn bê tông, pa lăng và nhiều
              thiết bị khác.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              Nhận thi công lu, đầm nền móng, khoan cắt bê tông và các hạng mục
              liên quan.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Thiết Bị Cho Thuê
            </h2>
            <p className="text-gray-600">
              Đa dạng thiết bị xây dựng đáp ứng mọi nhu cầu công trình
            </p>
            {searchQuery && (
              <p className="text-orange-500 mt-2">
                Tìm thấy {filteredProducts.length} kết quả cho &quot;
                {searchQuery}&quot;
              </p>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => {
                    sendGAEvent("event", "productClicked", {
                      value: product?.name ?? "Unknown Product",
                    });
                    openProductModal(product);
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay Badge */}
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Cho thuê
                    </div>
                    {/* Video Badge */}
                    {product.video && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full">
                        <Play className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <Button className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Xem chi tiết
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Không tìm thấy thiết bị phù hợp
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-500 rounded-lg p-2">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  CÔNG HỘ
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Chuyên cho thuê thiết bị xây dựng tại xã Vạn Tường, tỉnh Quảng
                Ngãi. Nhận thi công lu đầm nền móng, khoan cắt bê tông các loại.
                Phục vụ tận tâm.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Liên Hệ
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Xã Vạn Tường, tỉnh Quảng Ngãi
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <a
                    href="tel:0386660506"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    0386660506
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    anhnguyencongho@gmail.com
                  </span>
                </div>
                {/* ĐÃ THÊM: Facebook Link */}
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <a
                    href="https://www.facebook.com/ho.cong.5011516"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Facebook: ho.cong.5011516
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Dịch Vụ
              </h4>
              <ul className="space-y-2">
                {products.slice(0, 5).map((product) => (
                  <li key={product.id}>
                    <button
                      className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                      onClick={() => openProductModal(product)}
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Công Hộ - Cho Thuê Thiết Bị Xây Dựng
              tai Quảng Ngãi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      <Dialog open={!!selectedProduct} onOpenChange={() => closeProductModal()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-xl md:text-2xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              {/* Gallery with Tabs */}
              <Tabs defaultValue="images" className="w-full">
                <TabsList className="w-full justify-start mb-4">
                  <TabsTrigger
                    value="images"
                    className="flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    Hình ảnh
                  </TabsTrigger>
                  {selectedProduct.video && (
                    <TabsTrigger
                      value="video"
                      className="flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Video
                    </TabsTrigger>
                  )}
                </TabsList>

                {/* Images Tab */}
                <TabsContent value="images" className="mt-0">
                  {/* Main Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={selectedImage || selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProduct.gallery.map((img, index) => (
                      <button
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === img
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                        onClick={() => {
                          setSelectedImage(img);
                        }}
                      >
                        <img
                          src={img}
                          alt={`${selectedProduct.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </TabsContent>

                {/* Video Tab */}
                {selectedProduct.video && (
                  <TabsContent value="video" className="mt-0">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                      {selectedProduct.videoType === "youtube" ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedProduct.video}`}
                          title={`${selectedProduct.name} - Video`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={selectedProduct.video}
                          className="w-full h-full object-contain"
                          controls
                          playsInline
                        >
                          Trình duyệt của bạn không hỗ trợ video.
                        </video>
                      )}
                    </div>
                  </TabsContent>
                )}
              </Tabs>

              {/* Description */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mô tả</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features */}
              {selectedProduct.features &&
                selectedProduct.features.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Tính năng
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0386660506"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Gọi ngay: 0386660506
                </a>
                <a
                  href="mailto:congho.xaydung@gmail.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all border border-gray-200"
                >
                  <Mail className="w-5 h-5" />
                  Liên hệ tư vấn
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// 'use client'

// import { useState, useMemo } from 'react'
// import { products, type Product } from '@/data/products'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import {
//   Building2,
//   Phone,
//   Search,
//   MapPin,
//   Clock,
//   CheckCircle2,
//   Wrench,
//   Truck,
//   Headphones,
//   Mail,
//   ChevronRight,
//   Play,
//   Image as ImageIcon,
//   Facebook,
// } from 'lucide-react'

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
//   const [selectedImage, setSelectedImage] = useState<string>('')

//   const filteredProducts = useMemo(() => {
//     if (!searchQuery.trim()) return products
//     const query = searchQuery.toLowerCase()
//     return products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(query) ||
//         product.description.toLowerCase().includes(query)
//     )
//   }, [searchQuery])

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product)
//     setSelectedImage(product.image)
//   }

//   const closeProductModal = () => {
//     setSelectedProduct(null)
//     setSelectedImage('')
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* HEADER - Sticky với ảnh background */}
//       <header className="sticky top-0 z-50 shadow-lg relative overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: "url('/assets/background.jpg')" }}
//         />
//         {/* Overlay gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/85 to-orange-600/85" />

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center justify-between gap-4">
//             {/* Logo */}
//             <div className="flex items-center gap-2 flex-shrink-0">
//               <div className="bg-white rounded-lg p-2">
//                 <Building2 className="w-6 h-6 text-orange-500" />
//               </div>
//               <span
//                 className="text-xl md:text-2xl font-bold text-white"
//                 style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//               >
//                 CÔNG HỘ
//               </span>
//             </div>

//             {/* Search */}
//             <div className="hidden md:flex flex-1 max-w-md mx-4">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <Input
//                   type="text"
//                   placeholder="Tìm kiếm thiết bị..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 bg-white border-0 focus:ring-2 focus:ring-orange-300"
//                 />
//               </div>
//             </div>

//             {/* Call Button */}
//             <a
//               href="tel:0386660506"
//               className="flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
//             >
//               <Phone className="w-4 h-4" />
//               <span className="hidden sm:inline">0386660506</span>
//             </a>
//           </div>

//           {/* Mobile Search */}
//           <div className="md:hidden mt-3">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <Input
//                 type="text"
//                 placeholder="Tìm kiếm thiết bị..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 bg-white border-0 focus:ring-2 focus:ring-orange-300"
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* HERO BANNER */}
//       <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 py-12 md:py-20">
//         {/* Pattern Overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('/assets/background.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto px-4 text-center">
//           <h1
//             className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
//             style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//           >
//             Cho Thuê Thiết Bị Xây Dựng tại Vạn Tường, Quảng Ngãi
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
//             Máy móc chất lượng cao • Giá cạnh tranh • Giao hàng tận nơi
//           </p>

//           {/* Badges */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
//             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
//               <CheckCircle2 className="w-5 h-5 text-green-400" />
//               <span>Thiết bị đa dạng</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
//               <CheckCircle2 className="w-5 h-5 text-green-400" />
//               <span>Vận chuyển tận nơi</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
//               <CheckCircle2 className="w-5 h-5 text-green-400" />
//               <span>Hỗ trợ nhanh chóng</span>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <a
//             href="tel:0386660506"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             <Phone className="w-5 h-5" />
//             Gọi ngay: 0386660506
//           </a>
//         </div>
//       </section>

//       {/* SEO CONTENT SECTION */}
//       <section className="py-8 md:py-10 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-10">
//             <h1
//               className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
//               style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//             >
//               Công Hộ - Cho Thuê Thiết Bị Xây Dựng tại Vạn Tường, Quảng Ngãi
//             </h1>
//             <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
//               Chuyên cho thuê các thiết bị xây dựng như: xe lu, máy đầm cóc, máy đầm bàn, máy cắt đường, máy cắt bê tông, máy đục bê tông, máy khoan rút lõi, máy mài bê tông, máy trộn bê tông, pa lăng và nhiều thiết bị khác.
//             </p>
//             <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
//               Nhận thi công lu lèn, đầm nền móng, khoan cắt bê tông và các hạng mục liên quan.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS GRID */}
//       <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-10">
//             <h2
//               className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
//               style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//             >
//               Thiết Bị Cho Thuê
//             </h2>
//             <p className="text-gray-600">
//               Đa dạng thiết bị xây dựng đáp ứng mọi nhu cầu công trình
//             </p>
//             {searchQuery && (
//               <p className="text-orange-500 mt-2">
//                 Tìm thấy {filteredProducts.length} kết quả cho &quot;{searchQuery}&quot;
//               </p>
//             )}
//           </div>

//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:-translate-y-1"
//                   onClick={() => openProductModal(product)}
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[4/3] overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     {/* Overlay Badge */}
//                     <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       Cho thuê
//                     </div>
//                     {/* Video Badge */}
//                     {product.video && (
//                       <div className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full">
//                         <Play className="w-4 h-4" />
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-5">
//                     <h3
//                       className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors"
//                       style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//                     >
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//                       {product.description}
//                     </p>
//                     <Button
//                       className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
//                     >
//                       Xem chi tiết
//                       <ChevronRight className="w-4 h-4 ml-1" />
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500 text-lg">Không tìm thấy thiết bị phù hợp</p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => setSearchQuery('')}
//               >
//                 Xóa bộ lọc
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-slate-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             {/* Company Info */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="bg-orange-500 rounded-lg p-2">
//                   <Building2 className="w-6 h-6 text-white" />
//                 </div>
//                 <span
//                   className="text-xl font-bold"
//                   style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//                 >
//                   CÔNG HỘ
//                 </span>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 Chuyên cho thuê thiết bị xây dựng tại xã Vạn Tường, tỉnh Quảng Ngãi. Giá cả cạnh tranh, phục vụ tận tâm.
//               </p>
//             </div>

//             {/* Contact */}
//             <div>
//               <h4
//                 className="text-lg font-bold mb-4"
//                 style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//               >
//                 Liên Hệ
//               </h4>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
//                   <span className="text-gray-300">Xã Vạn Tường, tỉnh Quảng Ngãi</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
//                   <a href="tel:0386660506" className="text-gray-300 hover:text-orange-400 transition-colors">
//                     0386660506
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
//                   <span className="text-gray-300">anhnguyencongho@gmail.com</span>
//                 </div>
//                 {/* ĐÃ THÊM: Facebook Link */}
//                 <div className="flex items-center gap-3">
//                   <Facebook className="w-5 h-5 text-orange-400 flex-shrink-0" />
//                   <a
//                     href="https://www.facebook.com/ho.cong.5011516"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-300 hover:text-orange-400 transition-colors"
//                   >
//                     Facebook: ho.cong.5011516
//                   </a>
//                 </div>

//               </div>
//             </div>

//             {/* Services */}
//             <div>
//               <h4
//                 className="text-lg font-bold mb-4"
//                 style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//               >
//                 Dịch Vụ
//               </h4>
//               <ul className="space-y-2">
//                 {products.slice(0, 5).map((product) => (
//                   <li key={product.id}>
//                     <button
//                       className="text-gray-300 hover:text-orange-400 transition-colors text-left"
//                       onClick={() => openProductModal(product)}
//                     >
//                       {product.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="border-t border-slate-700 pt-8 text-center">
//             <p className="text-gray-400">
//               © {new Date().getFullYear()} Công Hộ - Cho Thuê Thiết Bị Xây Dựng tai Quảng Ngãi. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* PRODUCT DETAIL MODAL */}
//       <Dialog open={!!selectedProduct} onOpenChange={() => closeProductModal()}>
//         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//           {selectedProduct && (
//             <>
//               <DialogHeader>
//                 <DialogTitle
//                   className="text-xl md:text-2xl font-bold text-gray-800"
//                   style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
//                 >
//                   {selectedProduct.name}
//                 </DialogTitle>
//               </DialogHeader>

//               {/* Gallery with Tabs */}
//               <Tabs defaultValue="images" className="w-full">
//                 <TabsList className="w-full justify-start mb-4">
//                   <TabsTrigger value="images" className="flex items-center gap-2">
//                     <ImageIcon className="w-4 h-4" />
//                     Hình ảnh
//                   </TabsTrigger>
//                   {selectedProduct.video && (
//                     <TabsTrigger value="video" className="flex items-center gap-2">
//                       <Play className="w-4 h-4" />
//                       Video
//                     </TabsTrigger>
//                   )}
//                 </TabsList>

//                 {/* Images Tab */}
//                 <TabsContent value="images" className="mt-0">
//                   {/* Main Image */}
//                   <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
//                     <img
//                       src={selectedImage || selectedProduct.image}
//                       alt={selectedProduct.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Thumbnails */}
//                   <div className="flex gap-2 overflow-x-auto pb-2">
//                     {selectedProduct.gallery.map((img, index) => (
//                       <button
//                         key={index}
//                         className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
//                           selectedImage === img
//                             ? 'border-orange-500 ring-2 ring-orange-200'
//                             : 'border-gray-200 hover:border-orange-300'
//                         }`}
//                         onClick={() => setSelectedImage(img)}
//                       >
//                         <img
//                           src={img}
//                           alt={`${selectedProduct.name} - ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </TabsContent>

//                 {/* Video Tab */}
//                 {selectedProduct.video && (
//                   <TabsContent value="video" className="mt-0">
//                     <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
//                       {selectedProduct.videoType === 'youtube' ? (
//                         <iframe
//                           src={`https://www.youtube.com/embed/${selectedProduct.video}`}
//                           title={`${selectedProduct.name} - Video`}
//                           className="w-full h-full"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         />
//                       ) : (
//                         <video
//                           src={selectedProduct.video}
//                           className="w-full h-full object-contain"
//                           controls
//                           playsInline
//                         >
//                           Trình duyệt của bạn không hỗ trợ video.
//                         </video>
//                       )}
//                     </div>
//                   </TabsContent>
//                 )}
//               </Tabs>

//               {/* Description */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-2">Mô tả</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {selectedProduct.description}
//                 </p>
//               </div>

//               {/* Features */}
//               {selectedProduct.features && selectedProduct.features.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">Tính năng</h3>
//                   <ul className="space-y-2">
//                     {selectedProduct.features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                         <span className="text-gray-600">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* CTA Buttons */}
//               <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                 <a
//                   href="tel:0386660506"
//                   className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Gọi ngay: 0386660506
//                 </a>
//                 <a
//                   href="mailto:congho.xaydung@gmail.com"
//                   className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all border border-gray-200"
//                 >
//                   <Mail className="w-5 h-5" />
//                   Liên hệ tư vấn
//                 </a>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }
