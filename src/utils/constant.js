export const ROOM_TYPE = [
  {
    code: 1,
    name: "Skype"
  },
  {
    code: 2,
    name: "Telegram"
  }
];
export const DEFAULT_TABLE = {
  pageNum: 1,
  pageSize: 10,
  totalPage: 0
};
export const STATUS = {
  active: 1,
  deactive: 0
};
export const ERROR_CODE = [
  {
    code: 1,
    message: "Thành công"
  },
  {
    code: 2,
    message: "Đã xảy ra lỗi"
  },
  {
    code: 4,
    message: "Không tìm thấy bản ghi"
  },
  {
    code: 5,
    message: "Nội dung không hợp lệ"
  },
  {
    code: 6,
    message: "Tham số không hợp lệ"
  },
  {
    code: 7,
    message: "Không có dữ liệu"
  },
  {
    code: 10,
    message: "Hệ thống đang bận"
  },
  {
    code: 11,
    message: "Hệ thống đang bận"
  },
  {
    code: 12,
    message: "Hệ thống đang bận"
  },
  {
    code: 13,
    message: "Hệ thống đang bận"
  },
  {
    code: 14,
    message: "Hệ thống đang bận"
  },
  {
    code: 15,
    message: "Định dạng file không hợp lệ"
  },
  {
    code: 16,
    message: "Dung lượng file vượt quá giới hạn"
  },
  {
    code: 21,
    message: "Email đã tồn tại"
  },
  {
    code: 22,
    message: "Số điện thoại đã tồn tại"
  },
  {
    code: 23,
    message: "Tên đăng nhập hoặc mật khẩu không đúng"
  },
  {
    code: 24,
    message: "Employee is approve order !"
  },
  {
    code: 25,
    message: "Employee busy !"
  }
];
export const TYPE_NEWS = [
  {
    type: 1,
    name: "Chiến lược giao dịch phái sinh"
  },
  {
    type: 2,
    name: "Theo dõi hiệu quả Robo advisor"
  },
  {
    type: 3,
    name: "Cập nhật thị trường"
  },
  {
    type: 4,
    name: "Thông tin khóa học"
  },
  {
    type: 5,
    name: "Thư viện"
  },
  {
    type: 6,
    name: "Video"
  }
];
export const TYPE_REPORT = [
  {
    type: 1,
    name: "Notes tư vấn CK Phái Sinh (giữa ngày)"
  },
  {
    type: 2,
    name: "Bản tin Phái Sinh (VIP)"
  },
  {
    type: 3,
    name: "Bản tin CKPS- TTNC"
  },
  {
    type: 4,
    name: "Bản tin CW-TTNC"
  }
];
export const PRIORITY_COURSE = [
  {
    index: 1,
    name: "Khóa học hot"
  },
  {
    index: 2,
    name: "Bình thường"
  }
];
export const TYPE_COURSE = [
  {
    type: 1,
    name: " Offline"
  },
  {
    type: 2,
    name: "Online"
  }
];
export const CATEGORY_COURSE = [
  {
    cat: 1,
    name: "ĐÀO TẠO SẢN PHẨM"
  },
  {
    cat: 2,
    name: "ĐÀO TẠO CƠ BẢN"
  },
  {
    cat: 3,
    name: "ĐÀO TẠO KỸ THUẬT"
  },
  {
    cat: 4,
    name: "TÂM LÝ ĐẦU TƯ"
  }
];
export const NATIONALITY = [
  {
    id: "Viet Nam",
    name: "Việt Nam"
  },
  {
    id: "Han Quoc",
    name: "Hàn Quốc"
  },
  {
    id: "Nhat Ban",
    name: "Nhật Bản"
  },
  {
    id: "Trung Quoc",
    name: "Trung Quốc"
  },
  {
    id: "Phillipin",
    name: "Phillipin"
  },
  {
    id: "Singapore",
    name: "Singapore"
  }
];
export const TYPE_AUTHEN = [
  {
    id: 1,
    name: "Giấy CMND"
  },
  {
    id: 2,
    name: "Thẻ căn cước công dân"
  },
  {
    id: 3,
    name: "Khác"
  }
];
export const listInvestor = [
  {
    img: "/img/ic_investor1.png",
    title: "THAM GIA GROUP TƯ VẤN PHÁI SINH REAL TIME",
    detail:
      "Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả."
  },
  {
    img: "/img/ic_investor2.png",
    title: "THAM GIA ROOM ROBO TƯ VẤN VỚI HIỆU QUẢ LÊN TỚI 100%/THÁNG",
    detail:
      "Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả."
  },
  {
    img: "/img/ic_investor3.png",
    title: "THAM GIA GROUP TƯ VẤN KÍN TRÊN FACEBOOK",
    detail:
      "Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả."
  },
  {
    img: "/img/ic_investor4.png",
    title: "NHÂN BÁO CÁO VIP VỀ XU THẾ THỊ TRƯỜNG VÀ CƠ HỘI ĐẦU TƯ",
    detail:
      "Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả."
  },
  {
    img: "/img/ic_investor5.png",
    title: "THAM GIA CÁC LỚP ĐÀO TẠO VỀ KỸ THUẬT, TÂM LÝ GIAO DỊCH VÀ SẢN PHẨM",
    detail:
      "Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả."
  }
];
export const listReview = [
  {
    name: "NGUYỄN VĂN DƯƠNG",
    title: "CEO STOCKPLUS",
    img: "",
    review:
      "Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân."
  },
  {
    name: "NGUYỄN VĂN DƯƠNG",
    title: "CEO STOCKPLUS",
    img: "",
    review:
      "Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân."
  },
  {
    name: "NGUYỄN VĂN DƯƠNG",
    title: "CEO STOCKPLUS",
    img: "",
    review:
      "Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân."
  },
  {
    name: "NGUYỄN VĂN DƯƠNG",
    title: "CEO STOCKPLUS",
    img: "",
    review:
      "Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân."
  },
  {
    name: "NGUYỄN VĂN DƯƠNG",
    title: "CEO STOCKPLUS",
    img: "",
    review:
      "Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân."
  }
];
export const TYPE_GUIDELINE = [
  {
    type: 1,
    title: "Hướng dẫn giao dịch CKPS"
  },
  {
    type: 2,
    title: "Quy chuẩn hợp đồng tương lai"
  },
  {
    type: 3,
    title: "Biểu phí giao dịch"
  }
];
export const TYPE_ACCOUNT = [
  {
    type: 1,
    name: "Khách"
  },
  {
    type: 2,
    name: "Quản trị viên"
  },
  {
    type: 3,
    name: "Chuyên gia"
  },
  {
    type: 4,
    name: "Chăm sóc khách hàng"
  }
];
export const PERMISSION =  [
  {
    type: 1,
    name: "Quản trị viên"
  },
  {
    type: 2,
    name: "Khách"
  },
  {
    type: 3,
    name: "Chăm sóc khách hàng"
  },
  {
    type: 4,
    name: "Chuyên gia"
  }
];
export const TYPE_PERMISSION = {
  ADMIN: 1,
  CUSTOMER: 2,
  CUSTOMERCARE: 3,
  EXPERT: 4
};
export const REGISTER_STATUS = [
  {
    status: 1,
    name: "Đang chờ",
    color: "color-wait"
  },
  {
    status: 2,
    name: "Đã xử lý",
    color: "color-done"
  },
  {
    status: 3,
    name: "Đã hủy",
    color: "color-cancel"
  }
];
export const MENU_ROBO = [
  {
    index: 1,
    name: "HỆ THỐNG MBS"
  },
  {
    index: 2,
    name: "HỆ THỐNG BÊN THỨ BA PHÁT TRIỂN"
  },
  {
    index: 3,
    name: "TOP 10 HỆ THỐNG"
  },
  {
    index: 4,
    name: "KHÁM PHÁ HỆ THỐNG"
  }
];
// export const socketURL = "http://10.61.1.36:5656/live-web-advisor";
export const socketURL = "http://10.91.1.135:5656/live-web-advisor";
export const socketTopic = "/topic//web-advisor";