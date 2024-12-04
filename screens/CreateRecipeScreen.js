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

const CreateRecipeScreen = () => {
    const navigation = useNavigation();
    const { addRecipe } = useRecipes();
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [guide, setGuide] = useState('');
    const [photo, setPhoto] = useState(null);  // Store only the file URI

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
                <View style={globalStyles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={CreateRecipe.recipeContent}>
                            <View style={[MainStyles.RecipeButton, { marginTop: 12 }]}>
                                <Image
                                    source={require('../images/logos/createRecipe.png')}
                                    style={MainStyles.recipeImage}
                                />
                            </View>
                            <View style={CreateRecipe.recipeName}>
                                <TextInput
                                    style={CreateRecipe.recipeInput}
                                    placeholder="Recipe Name"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={CreateRecipe.recipeTextAreas}>
                                <Text style={CreateRecipe.recipeTitle}>INGREDIENTS</Text>
                                <TextInput
                                    style={CreateRecipe.ingredientsinput}
                                    placeholder="Ingredients"
                                    value={ingredients}
                                    onChangeText={setIngredients}
                                    multiline
                                />

                                <Text style={CreateRecipe.recipeTitle}>GUIDE</Text>
                                <TextInput
                                    style={CreateRecipe.guideinput}
                                    placeholder="Guide"
                                    value={guide}
                                    onChangeText={setGuide}
                                    multiline
                                />
                            </View>

                            <View style={[styles.photoSection, { flexDirection: 'column', alignItems: 'center' }]}>
                                {photo ? (
                                    <Image
                                        source={{ uri: photo }}
                                        style={{ width: 200, height: 200, resizeMode: 'cover', backgroundColor: 'lightgray' }}
                                    />
                                ) : (
                                    <Text style={styles.noPhotoText}>No photo selected</Text>
                                )}
                                <TouchableOpacity onPress={openCamera} style={CreateRecipe.photoButton}>
                                    <Text style={{ color: '#fff' }}>Take Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={openGallery} style={CreateRecipe.photoButton}>
                                    <Text style={{ color: '#fff' }}>Choose from Gallery</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleSaveRecipe} style={CreateRecipe.saveRecipeBtn}>
                                <Text style={{ fontWeight: 'bold', color: '#386641' }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ThemeLayout>
        </ImageBackground>
    );
};

export default CreateRecipeScreen;
