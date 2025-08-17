import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import {
	Image,
	Linking,
	Pressable,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
export default function LandingPage() {
	const router = useRouter()

	const socialLinks: {
		id: string
		url: string
		icon: 'instagram' | 'facebook' | 'whatsapp'
		color: string
	}[] = [
		{
			id: 'instagram',
			url: 'https://www.instagram.com/fryday.baku/',
			icon: 'instagram',
			color: '#C13584',
		},
		{
			id: 'facebook',
			url: 'https://www.facebook.com/fryday.az/',
			icon: 'facebook',
			color: '#1877F2',
		},
		{
			id: 'whatsapp',
			url: 'https://wa.me/994518882888',
			icon: 'whatsapp',
			color: '#25D366',
		},
	]

	const openLink = (url: string) => {
		Linking.openURL(url)
	}

	return (
		<View style={styles.root}>
			<StatusBar barStyle='dark-content' />

			{/* Header */}
			<View style={styles.header}>
				<Image
					resizeMode='stretch'
					style={styles.logo}
					source={require('@/assets/images/frydayLogo.png')}
				/>

				<View style={styles.socialMediaContainer}>
					{socialLinks.map(item => (
						<Pressable key={item.id} onPress={() => openLink(item.url)}>
							<FontAwesome
								name={item.icon}
								size={30}
								color={item.color}
								style={{ marginLeft: 16 }}
							/>
						</Pressable>
					))}
				</View>
			</View>

			{/* Content */}
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.bannerContainer}>
					<Image
						style={styles.banner}
						source={require('@/assets/images/PartySet.jpg')}
						resizeMode='cover'
					/>
				</View>
				<View style={styles.qrCodeBannerContainer}>
					<Image
						source={require('@/assets/images/qrCode.jpg')}
						resizeMode='cover'
						style={styles.qrBanner}
					/>
					<Pressable
						onPress={() =>
							Linking.openURL(
								'https://apps.apple.com/us/app/fryday/id6476988361'
							)
						}
					>
						<Image
							source={require('@/assets/images/appstore.png')}
							resizeMode='stretch'
							style={styles.howDownoladGoogle}
						/>
					</Pressable>
					<Pressable
						onPress={() =>
							Linking.openURL(
								'https://play.google.com/store/search?q=fryday&c=apps'
							)
						}
					>
						<Image
							source={require('@/assets/images/googleplay.png')}
							resizeMode='stretch'
							style={styles.howDownoladApp}
						/>
					</Pressable>
					<View style={styles.workBannerContainer}>
						<Image
							style={styles.workBanner}
							source={require('@/assets/images/startWorkWithUs.jpg')}
							resizeMode='contain'
						/>
					</View>
				</View>
			</ScrollView>
			<Pressable
				style={{ flex: 0.08, backgroundColor: '#F69222' }}
				onPress={() => router.replace('./login')}
			>
				<Animatable.Text
					animation='pulse'
					iterationCount='infinite'
					style={styles.linkText}
				>
					Нажмите для Регестрации
				</Animatable.Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		height: 70,
		paddingHorizontal: 20,
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	logo: {
		width: 150,
		height: 40,
	},
	socialMediaContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	scrollContainer: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	bannerContainer: {
		width: '100%',
		alignItems: 'center',
		marginTop: 0,
	},
	banner: {
		width: '100%',
		height: 345,
	},

	qrCodeBannerContainer: {
		position: 'relative',
	},
	qrBanner: {
		width: '100%',
		height: 345,
	},
	howDownoladGoogle: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	howDownoladApp: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: 125,
	},
	workBannerContainer: {
		width: '100%',
		alignItems: 'center',
	},
	workBanner: {
		width: '100%',
		height: 219,
		paddingTop: 20,
	},
	linkText: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 12,
	},
})
