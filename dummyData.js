const quanNoiThanh = [{
    name: "Ba Đình",
    type: "quan",
    slug: "ba-dinh",
    name_with_type: "Quận Ba Đình",
    path: "Ba Đình, Hà Nội",
    path_with_type: "Quận Ba Đình, Thành phố Hà Nội",
    code: "001",
    parent_code: "01"
}, {
    name: "Hoàn Kiếm",
    type: "quan",
    slug: "hoan-kiem",
    name_with_type: "Quận Hoàn Kiếm",
    path: "Hoàn Kiếm, Hà Nội",
    path_with_type: "Quận Hoàn Kiếm, Thành phố Hà Nội",
    code: "002",
    parent_code: "01"
}, {
    name: "Tây Hồ",
    type: "quan",
    slug: "tay-ho",
    name_with_type: "Quận Tây Hồ",
    path: "Tây Hồ, Hà Nội",
    path_with_type: "Quận Tây Hồ, Thành phố Hà Nội",
    code: "003",
    parent_code: "01"
}, {
    name: "Long Biên",
    type: "quan",
    slug: "long-bien",
    name_with_type: "Quận Long Biên",
    path: "Long Biên, Hà Nội",
    path_with_type: "Quận Long Biên, Thành phố Hà Nội",
    code: "004",
    parent_code: "01"
}, {
    name: "Cầu Giấy",
    type: "quan",
    slug: "cau-giay",
    name_with_type: "Quận Cầu Giấy",
    path: "Cầu Giấy, Hà Nội",
    path_with_type: "Quận Cầu Giấy, Thành phố Hà Nội",
    code: "005",
    parent_code: "01"
}, {
    name: "Đống Đa",
    type: "quan",
    slug: "dong-da",
    name_with_type: "Quận Đống Đa",
    path: "Đống Đa, Hà Nội",
    path_with_type: "Quận Đống Đa, Thành phố Hà Nội",
    code: "006",
    parent_code: "01"
}, {
    name: "Hai Bà Trưng",
    type: "quan",
    slug: "hai-ba-trung",
    name_with_type: "Quận Hai Bà Trưng",
    path: "Hai Bà Trưng, Hà Nội",
    path_with_type: "Quận Hai Bà Trưng, Thành phố Hà Nội",
    code: "007",
    parent_code: "01"
}, {
    name: "Hoàng Mai",
    type: "quan",
    slug: "hoang-mai",
    name_with_type: "Quận Hoàng Mai",
    path: "Hoàng Mai, Hà Nội",
    path_with_type: "Quận Hoàng Mai, Thành phố Hà Nội",
    code: "008",
    parent_code: "01"
}, {
    name: "Thanh Xuân",
    type: "quan",
    slug: "thanh-xuan",
    name_with_type: "Quận Thanh Xuân",
    path: "Thanh Xuân, Hà Nội",
    path_with_type: "Quận Thanh Xuân, Thành phố Hà Nội",
    code: "009",
    parent_code: "01"
},]
const posts = [{
    id: '1',
    quan: "Thanh Xuân",
    title: "Công ti A cần tìm người code helloWorld",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque. Habitant morbi tristique
      senectus et. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Lorem sed 
      risus ultricies tristique. Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Tạ Thị B",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '2',
    quan: "Cầu Giấy",
    title: "Công ti B cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '3',
    quan: "Cầu Giấy",
    title: "Công ti C cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '4',
    quan: "Cầu Giấy",
    title: "Công ti B cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '5',
    quan: "Cầu Giấy",
    title: "Công ti C cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '6',
    quan: "Cầu Giấy",
    title: "Công ti B cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}, {
    id: '7',
    quan: "Cầu Giấy",
    title: "Công ti C cần tìm kế toán",
    content: `Eget aliquet nibh praesent tristique magna. Consequat nisl vel pretium
       lectus quam id leo. Id ornare arcu odio ut. Aliquet bibendum enim facilisis gravida neque 
       convallis a cras. Mollis aliquam ut porttitor leo a. Montes nascetur ridiculus mus mauris. 
       Eget mauris pharetra et ultrices neque ornare. Mauris commodo quis imperdiet massa tincidunt 
       nunc pulvinar sapien et. Sem integer vitae justo eget.`,
    timeRequired: "partime",
    postAuthor: "Hồ Văn C",
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    createAt: "16/04/2020",
    expiredAt: "31/05/2020"
}
]
export {quanNoiThanh, posts}