import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"Hi, Đình Nam "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"Nhập công thức yêu thích của bạn"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Thể loại</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Công thức nấu ăn</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
