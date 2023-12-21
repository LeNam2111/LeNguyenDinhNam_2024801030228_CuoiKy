import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              onPress={() => setSelectedCategoryId(category.id)}
              style={{
                backgroundColor: category.id === selectedCategoryId
                  ? colors.COLOR_LIGHT
                  : (index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT),
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: category.id === selectedCategoryId
                    ? colors.COLOR_PRIMARY
                    : (index === 0 && colors.COLOR_LIGHT),
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      {selectedCategoryId && (
        <FlatList
          data={
            recipeList.filter((recipe) => recipe.category === selectedCategoryId)
          }
          renderItem={({ item }) => (
            <RecipeCard item={item} />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
