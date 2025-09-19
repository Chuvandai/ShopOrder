import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Bún chả Hà Nội – Hương vị truyền thống",
      image:
        "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551783604684-AE2UE7DYUGV96DUT4G80/chup-anh-thuc-an-1.jpg",
      author: "Nguyễn Văn An",
      date: "2025-09-20",
      shortDesc: "Món ăn đặc sản của Hà Nội với thịt nướng và bún tươi.",
    },
    {
      id: 2,
      title: "Phở bò – Linh hồn ẩm thực Việt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdP-iT5MDTAPVbHQni5-7xe8PBNDMiUYtag&s",
      author: "Trần Thị Hoa",
      date: "2025-09-18",
      shortDesc: "Món phở bò nổi tiếng với nước dùng thanh ngọt từ xương.",
    },
    {
      id: 3,
      title: "Bánh mì Việt Nam – Món ăn đường phố số 1",
      image:
        "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-xmtnguyen-699953.jpg&fm=jpg",
      author: "Lê Minh Tuấn",
      date: "2025-09-15",
      shortDesc: "Bánh mì giòn rụm với nhiều loại nhân đa dạng.",
    },
    {
      id: 4,
      title: "Gỏi cuốn – Món ăn thanh mát và bổ dưỡng",
      image:
        "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1562815515627-WUI5RN2UL8UZPT1WLROY/chup-anh-mon-an-nha-hang-chuyen-nghiep-4.jpg",
      author: "Phạm Thảo",
      date: "2025-09-10",
      shortDesc: "Gỏi cuốn với rau, tôm, thịt, bún được cuốn trong bánh tráng.",
    },
    {
      id: 3,
      title: "Bánh mì Việt Nam – Món ăn đường phố số 1",
      image:
        "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-xmtnguyen-699953.jpg&fm=jpg",
      author: "Lê Minh Tuấn",
      date: "2025-09-15",
      shortDesc: "Bánh mì giòn rụm với nhiều loại nhân đa dạng.",
    },
    {
      id: 4,
      title: "Gỏi cuốn – Món ăn thanh mát và bổ dưỡng",
      image:
        "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1562815515627-WUI5RN2UL8UZPT1WLROY/chup-anh-mon-an-nha-hang-chuyen-nghiep-4.jpg",
      author: "Phạm Thảo",
      date: "2025-09-10",
      shortDesc: "Gỏi cuốn với rau, tôm, thịt, bún được cuốn trong bánh tráng.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center font-extrabold text-4xl mb-12 text-fuchsia-600">
        Blog Ẩm Thực
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 group"
          >
            {/* Hình ảnh */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Nội dung */}
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">
                ✍️ {item.author} • 📅 {item.date}
              </p>
              <h3 className="font-bold text-2xl text-gray-800 mb-3 group-hover:text-fuchsia-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">{item.shortDesc}</p>

              <button className="mt-5 bg-fuchsia-500 text-white px-5 py-2 rounded-xl hover:bg-fuchsia-600 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
