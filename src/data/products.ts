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
    name: "Máy trộn bê tông",
    image: "../../public/assets/1_xelu.jpg",
    description: "Máy trộn bê tông công suất lớn, phù hợp cho các công trình xây dựng từ nhỏ đến trung bình. Thiết bị có khả năng trộn đều hỗn hợp bê tông, đảm bảo chất lượng đồng nhất. Dễ dàng vận hành và bảo trì, tiết kiệm thời gian và công sức cho công trình của bạn.",
    gallery: [
      "../../public/assets/1_xelu.jpg"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Công suất trộn: 350-500L/mẻ",
      "Động cơ điện mạnh mẽ, bền bỉ",
      "Thân máy bằng thép chịu lực cao",
      "Vận hành êm ái, ít tiếng ồn",
      "Dễ dàng di chuyển và lắp đặt"
    ]
  },
  {
    id: 2,
    name: "Máy đầm cóc",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80",
    description: "Máy đầm cóc chuyên dụng dùng để đầm nén đất, sỏi, cát trong các công trình xây dựng, làm đường. Thiết bị gọn nhẹ, dễ vận chuyển, hiệu suất cao. Phù hợp cho công trình làm móng nhà, lót đường, san lấp mặt bằng.",
    gallery: [
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Lực đầm mạnh và sâu",
      "Động cơ xăng tiết kiệm nhiên liệu",
      "Thiết kế gọn nhẹ, dễ vận hành",
      "Bánh xe lớn di chuyển linh hoạt",
      "Phù hợp nhiều loại địa hình"
    ]
  },
  {
    id: 3,
    name: "Máy cắt sắt",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    description: "Máy cắt sắt chuyên nghiệp dùng trong xây dựng, gia công cơ khí. Khả năng cắt nhanh, chính xác các loại thép, sắt xây dựng. Thiết kế an toàn, dễ sử dụng, phù hợp cho công trường và xưởng gia công.",
    gallery: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Cắt được nhiều loại sắt, thép",
      "Đĩa cắt chất lượng cao, bền bỉ",
      "Động cơ mạnh, cắt nhanh gọn",
      "Hệ thống an toàn tối ưu",
      "Thiết kế gọn gàng, dễ di chuyển"
    ]
  },
  {
    id: 4,
    name: "Máy khoan bê tông",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
    description: "Máy khoan bê tông công suất lớn, dùng cho các công việc khoan lỗ trên bề mặt bê tông, gạch, đá. Phù hợp cho lắp đặt điện nước, điều hòa, biển bảng quảng cáo. Thiết bị bền bỉ, hiệu suất cao.",
    gallery: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Công suất khoan sâu lớn",
      "Đầu khoan đa dạng kích thước",
      "Chống rung, giảm mỏi tay",
      "Hệ thống làm mát hiệu quả",
      "Phụ kiện đi kèm đầy đủ"
    ]
  },
  {
    id: 5,
    name: "Cần cẩu tháp",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    description: "Cần cẩu tháp chuyên dụng cho các công trình xây dựng cao tầng. Khả năng nâng hạ tải trọng lớn, tầm với xa. Thiết bị an toàn, ổn định, được bảo trì định kỳ. Phù hợp cho công trình chung cư, tòa nhà văn phòng.",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Tải trọng nâng lên đến 8 tấn",
      "Tầm với xa tối đa 70m",
      "Hệ thống an toàn hiện đại",
      "Điều khiển từ xa tiện lợi",
      "Lắp đặt bởi kỹ thuật viên chuyên nghiệp"
    ]
  },
  {
    id: 6,
    name: "Máy ủi",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    description: "Máy ủi đất chuyên dụng dùng cho công tác san lấp mặt bằng, làm đường, công trình thủy lợi. Động cơ mạnh mẽ, khả năng vận hành trên mọi địa hình. Phù hợp cho các công trình xây dựng lớn, khai thác mỏ.",
    gallery: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Động cơ Diesel công suất lớn",
      "Lưỡi ủi rộng, hiệu suất cao",
      "Hệ thống xích bám địa hình tốt",
      "Buồng lái thoải mái, an toàn",
      "Bảo trì, bảo dưỡng định kỳ"
    ]
  },
  {
    id: 7,
    name: "Máy xúc lật",
    image: "https://images.unsplash.com/photo-1621922688758-359fc864071e?w=800&q=80",
    description: "Máy xúc lặt đa năng dùng cho việc xúc, đổ, vận chuyển vật liệu xây dựng. Phù hợp cho công trình xây dựng, khai thác khoáng sản, nông nghiệp. Thiết bị linh hoạt, có thể gắn nhiều loại phụ kiện khác nhau.",
    gallery: [
      "https://images.unsplash.com/photo-1621922688758-359fc864071e?w=800&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Tải trọng xúc lớn",
      "Gầu xúc đa năng",
      "Động cơ mạnh, tiết kiệm nhiên liệu",
      "Lái xe linh hoạt, dễ điều khiển",
      "Có thể gắn nhiều phụ kiện"
    ]
  },
  {
    id: 8,
    name: "Máy trộn bê tông",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Máy trộn bê tông công suất lớn, phù hợp cho các công trình xây dựng từ nhỏ đến trung bình. Thiết bị có khả năng trộn đều hỗn hợp bê tông, đảm bảo chất lượng đồng nhất. Dễ dàng vận hành và bảo trì, tiết kiệm thời gian và công sức cho công trình của bạn.",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Công suất trộn: 350-500L/mẻ",
      "Động cơ điện mạnh mẽ, bền bỉ",
      "Thân máy bằng thép chịu lực cao",
      "Vận hành êm ái, ít tiếng ồn",
      "Dễ dàng di chuyển và lắp đặt"
    ]
  },
  {
    id: 9,
    name: "Máy trộn bê tông",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Máy trộn bê tông công suất lớn, phù hợp cho các công trình xây dựng từ nhỏ đến trung bình. Thiết bị có khả năng trộn đều hỗn hợp bê tông, đảm bảo chất lượng đồng nhất. Dễ dàng vận hành và bảo trì, tiết kiệm thời gian và công sức cho công trình của bạn.",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Công suất trộn: 350-500L/mẻ",
      "Động cơ điện mạnh mẽ, bền bỉ",
      "Thân máy bằng thép chịu lực cao",
      "Vận hành êm ái, ít tiếng ồn",
      "Dễ dàng di chuyển và lắp đặt"
    ]
  },
  {
    id: 10,
    name: "Máy trộn bê tông",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Máy trộn bê tông công suất lớn, phù hợp cho các công trình xây dựng từ nhỏ đến trung bình. Thiết bị có khả năng trộn đều hỗn hợp bê tông, đảm bảo chất lượng đồng nhất. Dễ dàng vận hành và bảo trì, tiết kiệm thời gian và công sức cho công trình của bạn.",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80"
    ],
    video: "dQw4w9WgXcQ",
    videoType: "youtube",
    features: [
      "Công suất trộn: 350-500L/mẻ",
      "Động cơ điện mạnh mẽ, bền bỉ",
      "Thân máy bằng thép chịu lực cao",
      "Vận hành êm ái, ít tiếng ồn",
      "Dễ dàng di chuyển và lắp đặt"
    ]
  }
];
