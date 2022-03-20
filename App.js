import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { quotes } from "./src/assets/quotes";

export default function App() {
	const [image, setImage] = useState(
		require("./src/assets/images/biscoito.png")
	);
	const [text, setText] = useState("Quebre o biscoito e encontre uma frase!");
	const [status, setStatus] = useState(false);
	function getRandomQuote() {
		let random = Math.floor(Math.random() * quotes.length);
		setImage(require("./src/assets/images/biscoitoAberto.png"));
		setText(quotes[random]);
		setStatus(!status);
	}

	function restartCookie() {
		setImage(require("./src/assets/images/biscoito.png"));
		setText("Quebre o biscoito e encontre uma frase!");
		setStatus(!status);
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Image source={image} style={styles.image} />
			<Text style={styles.cookieText}>"{text}"</Text>

			{status === false ? (
				<TouchableOpacity onPress={getRandomQuote} style={styles.button}>
					<View style={styles.buttonArea}>
						<Text style={styles.buttonText}>Quebrar biscoito</Text>
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					onPress={restartCookie}
					style={[styles.button, { marginTop: 10, borderColor: "#000" }]}
				>
					<View style={styles.buttonArea}>
						<Text style={[styles.buttonText, { color: "#000" }]}>
							Reiniciar biscoito
						</Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 250,
		height: 250,
	},
	cookieText: {
		fontSize: 20,
		color: "orange",
		margin: 30,
		fontStyle: "italic",
		textAlign: "center",
	},
	button: {
		width: 250,
		height: 50,
		borderColor: "orange",
		borderWidth: 2,
		borderRadius: 20,
	},
	buttonArea: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "orange",
		fontWeight: "bold",
	},
});
