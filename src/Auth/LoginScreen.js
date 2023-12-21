import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Xác thực username và password
    const isUsernameValid = username === "nam123";
    const isPasswordValid = password === "lenam123";

    // Nếu username và password hợp lệ, thì đăng nhập thành công
    if (isUsernameValid && isPasswordValid) {
      // Chuyển hướng đến màn hình WelcomeScreen
      navigation.navigate("Welcome");
    } else {
      // Hiển thị thông báo lỗi
      alert("Tên đăng nhập hoặc mật khẩu không hợp lệ");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Đăng nhập</Text>
      <TextInput
        style={{ width: "80%", borderColor: "#ccc", borderWidth: 1 }}
        placeholder="Tên đăng nhập"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{ width: "80%", borderColor: "#ccc", borderWidth: 1 }}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
