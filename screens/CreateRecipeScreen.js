import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useRecipes } from '../contexts/RecipeContext';
import styles from '../styles/style';
import { globalStyles } from '../styles/GlobalStyles';
import ThemeLayout from "../contexts/ThemeLayout";
import { MainStyles } from '../styles/MainScreenStyles';
import { CreateRecipe } from '../styles/CreateRecipeStyles';
import { useTheme } from '../contexts/ThemeContext';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const CreateRecipeScreen = () => {
    const navigation = useNavigation();
    const { addRecipe } = useRecipes();
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [guide, setGuide] = useState('');
    const [photo, setPhoto] = useState(null);  // Store only the file URI
    const { theme } = useTheme(); // Access theme from context

    const handleSaveRecipe = () => {
        if (name && ingredients && guide) {
            const date = new Date();
            const longFormattedDate = new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }).format(date);

            const newRecipe = { name, ingredients, guide, photo, date: longFormattedDate };
            addRecipe(newRecipe);
            navigation.navigate('RecipeList');
        } else {
            alert('Please fill in all fields');
        }
    };

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Camera access is required!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
            allowsEditing: true,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setPhoto(result.assets[0].uri);  // Store the file URI directly
        }
    };

    const openGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Gallery access is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setPhoto(result.assets[0].uri);  // Store the file URI directly
        }
    };

    return (
        <ImageBackground style={globalStyles.background} resizeMode="cover">
            <ThemeLayout>
                <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={CreateRecipe.recipeContent}>
                            <View style={[MainStyles.RecipeButton, { marginTop: '2%', backgroundColor: theme.bgRecipeBtn }]}>
                                <Image
                                    source={require('../images/logos/createRecipe.png')}
                                    style={MainStyles.recipeImage}
                                />
                            </View>
                            <View style={[CreateRecipe.recipeName, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgRecipeTextArea }]}>
                                <TextInput
                                    style={CreateRecipe.recipeInput}
                                    placeholderTextColor={theme.textAlmostBlack}
                                    placeholder="Recipe Name"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={[CreateRecipe.recipeTextAreas, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgRecipeTextArea }]}>
                                <Text style={[CreateRecipe.recipeTitle, { color: theme.textDarkGreen }]}>INGREDIENTS</Text>
                                <TextInput
                                    style={[CreateRecipe.ingredientsinput, { borderColor: theme.borderDarkGreen }]}
                                    placeholderTextColor={theme.textAlmostBlack}
                                    placeholder="Ingredients"
                                    value={ingredients}
                                    onChangeText={setIngredients}
                                    multiline
                                />

                                <Text style={[CreateRecipe.recipeTitle, { color: theme.textDarkGreen }]}>GUIDE</Text>
                                <TextInput
                                    style={[CreateRecipe.guideinput, { borderColor: theme.borderDarkGreen }]}
                                    placeholderTextColor={theme.textAlmostBlack}
                                    placeholder="Guide"
                                    value={guide}
                                    onChangeText={setGuide}
                                    multiline
                                />

                                <View style={CreateRecipe.photoSection}>
                                    {photo ? (
                                        <Image
                                            source={{ uri: photo }}
                                            style={CreateRecipe.recipePhoto}
                                        />
                                    ) : (
                                        <Text style={theme.textDarkGreen}>Select photo</Text>
                                    )}
                                    <View style={CreateRecipe.photoButtonRow}>
                                        <TouchableOpacity onPress={openCamera} style={[CreateRecipe.photoButton, { backgroundColor: theme.bgDarkGreen }]}>
                                            <Entypo name="camera" size={24} color={theme.textBtn} />
                                            <Text style={[{ color: theme.textBtn, }]}>Open Camera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={openGallery} style={[CreateRecipe.photoButton, { backgroundColor: theme.bgDarkGreen }]}>
                                            <FontAwesome name="file-photo-o" size={24} color={theme.textBtn} />
                                            <Text style={[{ color: theme.textBtn }]}>Open Gallery</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={handleSaveRecipe} style={[CreateRecipe.saveRecipeBtn, { backgroundColor: theme.bgSaveBtn, borderColor: theme.borderDarkGreen }]}>
                                    <Text style={{ fontWeight: 'bold', color: theme.textDarkGreen }}>SAVE</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </ThemeLayout>
        </ImageBackground>
    );
};

export default CreateRecipeScreen;
