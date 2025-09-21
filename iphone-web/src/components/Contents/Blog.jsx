import React, { useState } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({ name: '', content: '' });

  const blogs = [
    {
      id: 1,
      title: "Bún chả Hà Nội – Hương vị truyền thống",
      image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551783604684-AE2UE7DYUGV96DUT4G80/chup-anh-thuc-an-1.jpg",
      author: "Nguyễn Văn An",
      date: "2025-09-20",
      shortDesc: "Món ăn đặc sản của Hà Nội với thịt nướng và bún tươi.",
      content: "Bún chả Hà Nội là một món ăn đặc sản nổi tiếng của thủ đô. Món ăn này có nguồn gốc từ những năm 1950 và đã trở thành biểu tượng ẩm thực của Hà Nội. Bún chả bao gồm bún tươi, thịt nướng (thường là thịt ba chỉ), nước chấm chua ngọt và rau sống. Thịt được ướp gia vị và nướng trên than hoa, tạo nên hương vị đặc trưng khó quên.",
      likes: 156,
      views: 2340
    },
    {
      id: 2,
      title: "Phở bò – Linh hồn ẩm thực Việt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdP-iT5MDTAPVbHQni5-7xe8PBNDMiUYtag&s",
      author: "Trần Thị Hoa",
      date: "2025-09-18",
      shortDesc: "Món phở bò nổi tiếng với nước dùng thanh ngọt từ xương.",
      content: "Phở bò là món ăn quốc hồn quốc túy của Việt Nam, được yêu thích trên toàn thế giới. Nước dùng phở được ninh từ xương bò trong nhiều giờ, tạo nên vị ngọt thanh tự nhiên. Bánh phở mỏng, dai, kết hợp với thịt bò tái, hành tây, rau thơm và chanh tạo nên hương vị hài hòa tuyệt vời.",
      likes: 289,
      views: 4560
    },
    {
      id: 3,
      title: "Bánh mì Việt Nam – Món ăn đường phố số 1",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-xmtnguyen-699953.jpg&fm=jpg",
      author: "Lê Minh Tuấn",
      date: "2025-09-15",
      shortDesc: "Bánh mì giòn rụm với nhiều loại nhân đa dạng.",
      content: "Bánh mì Việt Nam là sự kết hợp tinh tế giữa ẩm thực Pháp và Việt Nam. Vỏ bánh giòn rụm, nhân đa dạng từ pate, thịt nướng, chả lụa, dưa chua, rau thơm. Món ăn này đã trở thành biểu tượng của ẩm thực đường phố Việt Nam và được yêu thích khắp nơi.",
      likes: 198,
      views: 3120
    },
    {
      id: 4,
      title: "Gỏi cuốn – Món ăn thanh mát và bổ dưỡng",
      image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1562815515627-WUI5RN2UL8UZPT1WLROY/chup-anh-mon-an-nha-hang-chuyen-nghiep-4.jpg",
      author: "Phạm Thảo",
      date: "2025-09-10",
      shortDesc: "Gỏi cuốn với rau, tôm, thịt, bún được cuốn trong bánh tráng.",
      content: "Gỏi cuốn là món ăn thanh mát, bổ dưỡng với nguyên liệu tươi ngon. Bánh tráng mỏng cuốn cùng rau sống, tôm, thịt, bún tạo nên hương vị tươi mát. Món ăn này rất phù hợp cho những ngày hè nóng bức và được nhiều người yêu thích vì tính lành mạnh.",
      likes: 167,
      views: 2890
    },
    {
      id: 5,
      title: "Chả cá Lã Vọng – Đặc sản Hà Nội",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      author: "Văn Đại",
      date: "2025-09-05",
      shortDesc: "Chả cá thơm ngon với nghệ và thì là.",
      content: "Chả cá Lã Vọng là món ăn đặc sản nổi tiếng của Hà Nội. Cá được ướp nghệ, thì là, nướng vàng ươm, ăn kèm bún, rau thơm và nước chấm chua ngọt. Hương vị đặc trưng của nghệ và thì là tạo nên sự khác biệt cho món ăn này.",
      likes: 234,
      views: 3780
    },
    {
      id: 6,
      title: "Nem nướng Nha Trang – Hương vị miền Trung",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
      author: "Nguyễn Thị Lan",
      date: "2025-09-01",
      shortDesc: "Nem nướng thơm ngon với nước chấm đặc biệt.",
      content: "Nem nướng Nha Trang là món ăn đặc sản của miền Trung. Nem được làm từ thịt heo, tôm, mực, ướp gia vị đặc biệt và nướng than hoa. Ăn kèm bánh tráng, rau sống và nước chấm chua ngọt tạo nên hương vị đậm đà khó quên.",
      likes: 145,
      views: 2560
    }
  ];

  const handleAddComment = (blogId) => {
    if (newComment.name.trim() && newComment.content.trim()) {
      const comment = {
        id: Date.now(),
        name: newComment.name,
        content: newComment.content,
        date: new Date().toLocaleDateString('vi-VN'),
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      
      setComments(prev => ({
        ...prev,
        [blogId]: [...(prev[blogId] || []), comment]
      }));
      
      setNewComment({ name: '', content: '' });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🍽️ Blog Ẩm Thực
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những câu chuyện ẩm thực đặc sắc, công thức nấu ăn ngon và trải nghiệm ẩm thực độc đáo
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedBlog(item)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-semibold text-orange-600">
                  🔥 Hot
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <span className="text-orange-500">✍️</span>
                    {item.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="text-orange-500">📅</span>
                    {formatDate(item.date)}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-orange-600 transition line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.shortDesc}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <span className="text-red-500">❤️</span>
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">👁️</span>
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">💬</span>
                      {comments[item.id]?.length || 0}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold">
                  📖 Đọc thêm
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Detail Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">📖 Chi tiết bài viết</h3>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Blog Image */}
                <div className="mb-6">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Blog Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="text-orange-500">✍️</span>
                      {selectedBlog.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-orange-500">📅</span>
                      {formatDate(selectedBlog.date)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-red-500">❤️</span>
                      {selectedBlog.likes} lượt thích
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">👁️</span>
                      {selectedBlog.views} lượt xem
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedBlog.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedBlog.content}
                  </p>
                </div>

                {/* Comments Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    💬 Bình luận ({comments[selectedBlog.id]?.length || 0})
                  </h4>

                  {/* Add Comment Form */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Tên của bạn"
                        value={newComment.name}
                        onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Nội dung bình luận"
                        value={newComment.content}
                        onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <button
                      onClick={() => handleAddComment(selectedBlog.id)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold"
                    >
                      💬 Gửi bình luận
                    </button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments[selectedBlog.id]?.map((comment) => (
                      <div key={comment.id} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold">
                            {comment.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">{comment.name}</h5>
                            <p className="text-sm text-gray-500">
                              {comment.date} lúc {comment.time}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 ml-11">{comment.content}</p>
                      </div>
                    ))}
                    
                    {(!comments[selectedBlog.id] || comments[selectedBlog.id].length === 0) && (
                      <div className="text-center py-8 text-gray-500">
                        <span className="text-4xl">💬</span>
                        <p className="mt-2">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
