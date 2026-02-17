export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  gallery: string[];
  video?: string;
  videoType?: 'youtube' | 'local';
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Xe lu",
    image: "/assets/1_xelu.jpg",
    description: "Xe lu chuyên dùng để nén và làm phẳng bề mặt nền, giúp tăng độ chắc và ổn định cho công trình.",
    gallery: ["/assets/1_xelu.jpg"],
    video: "/assets/1_xelu.mp4",
    videoType: "local",
    features: ["Nén nền hiệu quả", "Hoạt động ổn định", "Phù hợp công trình đường"]
  },
  {
    id: 2,
    name: "Máy đầm cóc",
    image: "/assets/2_maydamcoc.jpg",
    description: "Máy đầm cóc dùng để đầm nền đất, cát và sỏi trong thi công móng và san lấp.",
    gallery: ["/assets/2_maydamcoc.jpg"],
    video: "/assets/2_maydamcoc.mp4",
    videoType: "local",
    features: ["Lực đầm mạnh", "Gọn nhẹ", "Dễ di chuyển"]
  },
  {
    id: 3,
    name: "Máy đầm bàn",
    image: "/assets/3_maydamban.jpg",
    description: "Máy đầm bàn giúp làm phẳng và nén bề mặt bê tông hoặc nền đất.",
    gallery: ["/assets/3_maydamban.jpg"],
    video: "/assets/3_maydamban.mp4",
    videoType: "local",
    features: ["Nén bề mặt đều", "Hoạt động êm", "Dễ vận hành"]
  },
  {
    id: 4,
    name: "Máy cắt đường",
    image: "/assets/4_maycatduong.jpg",
    description: "Máy cắt đường chuyên dùng để cắt bê tông và mặt đường nhựa.",
    gallery: ["/assets/4_maycatduong.jpg"],
    video: "/assets/4_maycatduong.mp4",
    videoType: "local",
    features: ["Cắt nhanh", "Đường cắt chính xác", "Động cơ mạnh"]
  },
  {
    id: 5,
    name: "Máy cắt bê tông điện",
    image: "/assets/5_maycatbetongdien.jpg",
    description: "Máy cắt bê tông điện vận hành êm, phù hợp làm việc trong khu vực cần ít tiếng ồn.",
    gallery: [
      "/assets/5_maycatbetongdien.jpg",
      "/assets/5_maycatbetongdien_2.jpg"
    ],
    video: "/assets/5_maycatbetongdien.mp4",
    videoType: "local",
    features: ["Ít tiếng ồn", "Dễ sử dụng", "Chi phí vận hành thấp"]
  },
  {
    id: 6,
    name: "Máy cắt bê tông xăng",
    image: "/assets/6_maycatbetongxang.jpg",
    description: "Máy cắt bê tông xăng công suất lớn, phù hợp công trình ngoài trời.",
    gallery: ["/assets/6_maycatbetongxang.jpg"],
    video: "/assets/6_maycatbetongxang.mp4",
    videoType: "local",
    features: ["Động cơ mạnh", "Di chuyển linh hoạt", "Cắt bê tông dày"]
  },
  {
    id: 7,
    name: "Máy đục bê tông",
    image: "/assets/7_mayducbetong.jpg",
    description: "Máy đục bê tông chuyên dùng phá dỡ và sửa chữa công trình.",
    gallery: ["/assets/7_mayducbetong.jpg"],
    video: "/assets/7_mayducbetong.mp4",
    videoType: "local",
    features: ["Lực đục mạnh", "Hoạt động bền bỉ", "Tiết kiệm thời gian"]
  },
  {
    id: 8,
    name: "Máy khoan rút lõi",
    image: "/assets/8_maykhoanrutloi.jpg",
    description: "Máy khoan rút lõi dùng để khoan lỗ bê tông chính xác cho lắp đặt kỹ thuật.",
    gallery: ["/assets/8_maykhoanrutloi.jpg"],
    videoType: "local",
    features: ["Khoan chính xác", "Ít rung", "Hiệu suất cao"]
  },
  {
    id: 9,
    name: "Máy mài bê tông",
    image: "/assets/9_maymaibetong.jpg",
    description: "Máy mài bê tông dùng để làm phẳng bề mặt, xử lý sàn trước khi sơn hoặc phủ epoxy.",
    gallery: ["/assets/9_maymaibetong.jpg"],
    videoType: "local",
    features: ["Mài phẳng hiệu quả", "Động cơ mạnh", "Dễ vận hành"]
  },

  {
    id: 10,
    name: "Máy trộn bê tông",
    image: "/assets/10_maytronbetong.jpg",
    description: "Máy trộn bê tông giúp trộn đều hỗn hợp bê tông nhanh và hiệu quả.",
    gallery: ["/assets/10_maytronbetong.jpg"],
    videoType: "local",
    features: ["Trộn đều", "Dễ vận hành", "Tiết kiệm thời gian"]
  },
  {
    id: 11,
    name: "Pa lăng",
    image: "/assets/11_palang.jpg",
    description: "Pa lăng dùng để nâng hạ vật liệu và thiết bị trong thi công.",
    gallery: ["/assets/11_palang.jpg"],
    video: "/assets/11_palang.mp4",
    videoType: "local",
    features: ["Nâng hạ an toàn", "Tải trọng lớn", "Hoạt động ổn định"]
  }
];
