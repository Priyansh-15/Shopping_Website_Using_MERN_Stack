const products = [
  {
    name: "Roadster Men Teal Blue & Black Regular Fit Printed Sustainable Casual Shirt",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11326166/2020/3/13/0bd3aa2a-ea69-4faa-8c97-e0e81046392b1584092903688-Roadster-Men-Shirts-451584092901753-1.jpg",
    description:
      "Teal blue and Black printed casual shirt, has a mandarin collar, long sleeves, button placket, and curved hem",
    price: 479,
    countInStock: 18,
  },
  {
    name: "Roadster Men Black & Grey Checked Casual Sustainable Shirt",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg",
    description:
      "Black and grey checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem",
    price: 674,
    countInStock: 25,
  },
  {
    name: "Mast & Harbour Men Navy Blue Solid Skinny Fit Stretchable Jeans",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12983788/2021/12/9/809f99c4-a61f-4f2e-9191-d86e78396ab41639030890960-Mast--Harbour-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-S-1.jpg",
    description:
      "Dark shade, no fade navy blue jeans, Skinny fit, mid-rise, Clean look, Stretchable, 5 pocket, Length: regular",
    price: 799,
    countInStock: 20,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 69999,
    countInStock: 12,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 6999,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 660110,
    countInStock: 7,
  },
  {
    name: "Satrani Beige & Maroon Printed Unstitched Lehenga & Blouse with Dupatta",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/8/3d4edaee-498e-4bf0-8e2e-a1a5ae225ff51583617740303-1.jpg",
    description:
      "Beige lehenga choli, Beige blouse, sleeveless, Beige unstitched lehenga, flared hem",
    price: 1687,
    countInStock: 19,
  },
  {
    name: "Libas Women Blue Printed Kurta with Palazzos & Dupatta",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/19/76100d43-6521-498f-8b33-dac92fd4810e1608361677531-1.jpg",
    description:
      "Blue printed kurta with palazzos and dupatta, Blue straight calf length kurta, has a mandarin collar, Blue printed palazzos, Blue solid dupatta, has taping border",
    price: 1091,
    countInStock: 17,
  },
  {
    name: "Mast & Harbour Women Pink Regular Fit Printed Semi-Sheer Casual Shirt",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13879734/2021/4/5/ba48fefb-1911-4385-bbc5-f5170636b30e1617602148127-Mast--Harbour-Women-Shirts-8401617602146888-1.jpg",
    description:
      "Pink floral printed casual shirt, has a mandarin ruffled collar, long sleeves with tie-up detail, full button placket, and curved hem",
    price: 599,
    countInStock: 23,
  },
  {
    name: "Cutiekins Girls Peach-Coloured & Green Printed Top with Palazzos",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/17/090f9dc1-781d-43ed-a77b-80eb0675a50f1602890526587-1.jpg",
    description:
      "This clothing set consists of top and palazzos, Peach-Coloured printed top, has a shirt collar, long sleeves, Green solid palazzos, has a drawstring closure",
    price: 832,
    countInStock: 23,
  },
  {
    name: "Tiny Baby Girls Brown Solid Maxi Dress",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/23/83c6160e-1695-421c-835a-b6e45f45ad281619156065914-1.jpg",
    description:
      "Brown solid maxi dress, has a round neck, zip closure, an attached lining, and flared hem",
    price: 2450,
    countInStock: 13,
  },
  {
    name: "Lil Lollipop Unisex Kids Blue Washed Denim Jacket with Patchwork",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15742390/2021/10/6/4551a6cb-7f18-4ee5-aaef-a9f17ce415da1633525431803LilLollipopUnisexKidsBlueWashedDenimJacketwithPatchwork1.jpg",
    description:
      "Blue washed printed denim jacket with patchwork, has a spread collar, 4 pockets ,has a button closure, sleeveless, curved hemline, fleece lining",
    price: 2154,
    countInStock: 25,
  },
];
  
module.exports = products;