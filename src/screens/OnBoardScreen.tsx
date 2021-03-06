import React, { FC } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	StatusBar,
	Text,
	TouchableOpacity,
} from "react-native";
import { COLORS } from "../consts/colors";
//Types
import { OnBoardScreenNavigationProp } from "../types/navigationType";

const style = StyleSheet.create({
	details: {
		height: "90%",
		bottom: 0,
		position: "absolute",
		paddingHorizontal: 40,
	},
	btn: {
		height: 50,
		width: 120,
		backgroundColor: COLORS.white,
		marginTop: 20,
		borderRadius: 7,
		justifyContent: "center",
		alignItems: "center",
	},
});

interface Props {
	navigation: OnBoardScreenNavigationProp;
}

export const OnBoardScreen: FC<Props> = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar
				translucent
				backgroundColor="rgba(0,0,0,0)"
				barStyle="light-content"
			/>
			<ImageBackground
				style={{ flex: 1 }}
				source={require("../assets/onboardImage.jpg")}
			>
				<View style={style.details}>
					<Text
						style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
					>
						Discover
					</Text>
					<Text
						style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
					>
						world with us
					</Text>
					<Text style={{ color: COLORS.white, lineHeight: 25, marginTop: 15 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Consequat nisl vel pretium lectus quam id leo.
					</Text>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => navigation.navigate("HomeScreen")}
					>
						<View style={style.btn}>
							<Text style={{ fontWeight: "bold" }}>Get Started</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
