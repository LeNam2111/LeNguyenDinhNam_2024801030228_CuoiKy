export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Bữa sáng",
	},
	{
		id: "02",
		category: "Bữa Trưa",
	},
	{
		id: "03",
		category: "Bữa tối",
	},
	{
		id: "04",
		category: "Thức ăn nhanh",
	},
];

export const recipeList = [
	{
		id: "01",
		name: "Phở",
		image: require("../assets/images/Pho.jpg"),
		rating: "5.0",
		ingredients: ["Bánh phở", "Thịt bò", "Gạo", "Hành lá", "Rau thơm", "Gia vị"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"Phở là một món ăn truyền thống của Việt Nam, được làm từ bánh phở, thịt bò, gạo, hành lá, rau thơm và gia vị. Món ăn này có hương vị thơm ngon, thanh mát, rất thích hợp để thưởng thức trong bữa sáng.",
		steps: [
			"Nấu nước dùng: Cho xương bò vào nồi, thêm nước và đun sôi. Sau đó, hạ lửa nhỏ và ninh xương trong khoảng 40 phút cho đến khi nước dùng ngọt.",
			"Chuẩn bị các nguyên liệu khác: Thịt bò thái lát mỏng, hành lá thái nhỏ, rau thơm rửa sạch",
			"Nấu bánh phở: Cho bánh phở vào nồi nước dùng đang sôi, luộc chín.",
			"Cho bánh phở ra tô, thêm thịt bò, hành lá, rau thơm và chan nước dùng.",
			"Thêm gia vị tùy theo khẩu vị và thưởng thức.",
		],
	},
	{
		id: "01",
		name: "Bún bò huế",
		image: require("../assets/images/bunbo.jpg"),
		rating: "5.0",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "04",
		name: "Hot Dog",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		ingredients: ["Bánh mì xúc xích", "Frankfurters", "Sốt cà chua", "Mù tạt"],
		time: "40 Phút",
		difficulty: "Trung Bình",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"Một món bánh xúc xích cổ điển được yêu thích của Mỹ với nhân xúc xích ngon ngọt, rưới sốt cà chua và mù tạt để tạo nên sự cân bằng hoàn hảo giữa các hương vị.",
		steps: [
			"Nướng hoặc hâm nóng xúc xích cho đến khi chín hẳn.",
			"Đặt xúc xích vào bánh mì xúc xích.",
			"Bóp nước sốt cà chua và mù tạt lên trên xúc xích.",
			"Phục vụ các món bạn yêu thích và thưởng thức!",
		],
	},
	{
		id: "05",
		name: "Manchurian",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "05",
		name: "Gà",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		ingredients: ["Ức gà", "Muối", "Tiêu đen", "Dầu ô liu"],
		time: "45 mins",
		difficulty: "Trung bình",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"Một món gà mọng nước được nêm với hỗn hợp muối và hạt tiêu đen, sau đó được nấu chín hoàn hảo với một chút dầu ô liu.",
		steps: [
			"Làm nóng lò trước ở nhiệt độ quy định.",
			"Ướp ức gà với muối và tiêu đen.",
			"Đun nóng dầu ô liu trong chảo trên lửa vừa cao.",
			"Áp ức gà hai mặt cho đến khi có màu vàng nâu.",
			"Chuyển gà vào lò nướng và nướng cho đến khi chín.",
			"Dùng nóng và thưởng thức món gà thơm ngon của bạn!",
		],
	},
	{
		id: "06",
		name: "Cupcakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "07",
		name: "Curry",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "08",
		name: "Ramen",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
	
];
