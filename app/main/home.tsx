import { useLocalSearchParams } from 'expo-router'
import { Image, SectionList, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
	const { name } = useLocalSearchParams()

	const MENU_DATA = [
		{
			title: 'Meals 🍔',
			data: [
				{
					title: 'Boom Boom Burger',
					description:
						'Meat (AzProtein), cheese, tomato, lettuce, onion, jalapeño, secret hot sauce',
					price: '5.90$',
					image: require('@/assets/images/burgersImage/BoomBoom.webp'),
				},
				{
					title: 'Chicken Burger',
					description:
						'Chicken, mayonnaise, lettuce, pickles, honey mustard sauce',
					price: '6.90$',
					image: require('@/assets/images/burgersImage/ChickenBurger.webp'),
				},
				{
					title: 'Fryday Cheeseburger',
					description:
						"Beef (AzProtein), cheese, lettuce, tomato, onion, Fryday's secret sauce",
					price: '7.20$',
					image: require('@/assets/images/burgersImage/CizBurger.webp'),
				},
				{
					title: 'Don Pablo',
					description:
						'Brioche, chicken, lettuce, cheese, tomato, bbq sauce, fried potatoes, mayonnaise',
					price: '7.50$',
					image: require('@/assets/images/burgersImage/DonPablo.webp'),
				},
				{
					title: 'Double CheeseBurger',
					description:
						"2x Meat (AzProtein), 2x cheese, tomato, lettuce, onion, Fryday's secret sauce",
					price: '8.20$',
					image: require('@/assets/images/burgersImage/Double.webp'),
				},
				{
					title: 'Fryday Burger',
					description:
						"Beef (AzProtein), lettuce, tomato, onion, Fryday's secret sauce",
					price: '6.50$',
					image: require('@/assets/images/burgersImage/FrydayBurger.webp'),
				},
				{
					title: "Hal'z Burger",
					description:
						"Meat (AzProtein), tomato, lettuce, cheese sauce, beef chili, Fryday's secret sauce",
					price: '6.70$',
					image: require('@/assets/images/burgersImage/Halz.webp'),
				},
				{
					title: 'Monster Burger',
					description:
						"3x Meat (AzProtein), 3x cheese, tomato, lettuce, onion, Fryday's secret sauce",
					price: '9.90$',
					image: require('@/assets/images/burgersImage/Monster.webp'),
				},
				{
					title: 'Outlaw Buger',
					description:
						'Meat (AzProtein), tomato, lettuce, cheese, caramelized onions and mushrooms, BBQ',
					price: '7.80$',
					image: require('@/assets/images/burgersImage/Outlaw.webp'),
				},
				{
					title: 'Size Zero',
					description: 'Meat (AzProtein), cheese, tomato, lettuce, onion',
					price: '5.20$',
					image: require('@/assets/images/burgersImage/SizeZero.webp'),
				},
				{
					title: 'X-Burger',
					description:
						'Beef (AzProtein), maasdam cheese, iceberg lettuce, fried onions, boom boom sauce',
					price: '6.40$',
					image: require('@/assets/images/burgersImage/XBurger.webp'),
				},
				{
					title: 'Zinger',
					description:
						"Fried chicken, Cheddar cheese, lettuce, pickles, Fryday's secret sauce",
					price: '6.90$',
					image: require('@/assets/images/burgersImage/Zinger.webp'),
				},
				{
					title: 'Trufel Burger',
					description:
						'Brioche, meat, mushroom cheese, caramel mushroom, truffle mayonnaise, fried onion',
					price: '9.90$',
					image: require('@/assets/images/burgersImage/Zinger.webp'),
				},
			],
		},
		{
			title: 'Snacks 🍪',
			data: [
				{
					title: 'BBQ Wings',
					description: '6 pcs',
					price: '8.50$',
					image: require('@/assets/images/Snacks/bbqWings.webp'),
				},
				{
					title: 'Buffalo Wings',
					description: '6 pcs',
					price: '8.50$',
					image: require('@/assets/images/Snacks/BuffaloWings.webp'),
				},
				{
					title: ' Wings with Honey Mustard',
					description: '6 pcs',
					price: '8.50$',
					image: require('@/assets/images/Snacks/HoneyMustardWings.webp'),
				},
				{
					title: 'Fries',
					price: '4.50$',
					image: require('@/assets/images/Snacks/Fries.webp'),
				},
				{
					title: 'Chili Cheese Fries',
					price: '6.50$',
					image: require('@/assets/images/Snacks/ChiliCheeseFries.webp'),
				},
				{
					title: 'Messy Fries',
					price: '7.50$',
					image: require('@/assets/images/Snacks/MessiFries.webp'),
				},
				{
					title: 'Chicken Nuggets',
					description: '6 pcs + Fries',
					price: '7.50$',
					image: require('@/assets/images/Snacks/nuggets.webp'),
				},
				{
					title: 'Mozarella Sticks',
					description: '4 pcs',
					price: '7.50$',
					image: require('@/assets/images/Snacks/MozarellaSticks.webp'),
				},
			],
		},
		{
			title: 'Cold Drinks 🧊',
			data: [
				{
					title: 'Fanta / Sprite / Coca-Cola',
					price: '3.50$',
					image: require('@/assets/images/Drinks/cola.webp'),
				},
				{
					title: 'COLD TEA',
					price: '3.00$',
					image: require('@/assets/images/Drinks/fuseTea.webp'),
				},
				{
					title: 'BONAQUA still / sparkling',
					price: '2.00$',
					image: require('@/assets/images/Drinks/water.webp'),
				},
				{
					title: 'REDBULL energy drink',
					price: '3.50$',
					image: require('@/assets/images/Drinks/RedBull.webp'),
				},
			],
		},
	]

	return (
		<View style={styles.container}>
			<Text style={styles.header}>📋 Menu</Text>
			{name ? <Text style={styles.welcome}>Welcome, {name} 👋</Text> : null}

			<SectionList
				sections={MENU_DATA}
				keyExtractor={(item, index) => item.title + index}
				renderItem={({ item }) => (
					<View style={styles.itemBox}>
						<Image
							resizeMode='contain'
							source={item.image}
							style={styles.burgerImage}
						/>
						<View style={styles.itemContent}>
							<Text style={styles.itemTitle}>{item.title}</Text>
							<Text style={styles.itemDescription}>{item.description}</Text>
							<Text style={styles.itemPrice}>{item.price}</Text>
						</View>
					</View>
				)}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={styles.section}>{title}</Text>
				)}
				contentContainerStyle={{ paddingBottom: 40 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f6fa',
		paddingTop: 40,
		paddingHorizontal: 15,
	},
	header: {
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 5,
		color: '#2c3e50',
	},
	welcome: {
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 20,
		color: '#7f8c8d',
	},
	section: {
		fontSize: 24,
		fontWeight: '900',
		backgroundColor: '#dfe6e9',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 12,
		marginTop: 15,
		color: 'tomato',
	},
	itemBox: {
		backgroundColor: '#fff',
		borderRadius: 14,
		overflow: 'hidden',
		marginVertical: 10,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 6,
		elevation: 3,
	},
	burgerImage: {
		width: '100%',
		height: 180,
	},
	itemContent: {
		padding: 12,
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#2c3e50',
		marginBottom: 4,
	},
	itemDescription: {
		fontSize: 14,
		color: '#636e72',
		marginBottom: 8,
	},
	itemPrice: {
		fontSize: 16,
		fontWeight: '700',
		color: '#e17055',
		textAlign: 'right',
	},
})
