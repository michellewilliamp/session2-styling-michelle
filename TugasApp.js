import { StyleSheet, SafeAreaView, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Welcome!</Text>
			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType="email-address"
				style={styles.input}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
				keyboardType="visible-password"
				secureTextEntry
				style={styles.input}
				onSubmitEditing={() => alert("Login Successfully!")}
			/>
			<View style={styles.btnContainer}>
				<Button title="Login" onPress={() => alert("Login Successfully!")} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ff1493",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 40,
		color: "#fff",
		marginBottom: 20,
		fontWeight: "bold",
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		width: "80%",
		marginTop: 15,
		color: "#000",
	},
	btnContainer: {
		backgroundColor: "white",
		marginTop: 15,
		width: "80%",
	}
});
