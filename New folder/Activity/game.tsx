import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Images, ScrollView } from 'react-native'
// Define the URL of the background image
const imageUrl: string = 'https://_image/th.jfif.crdownload';

// Get the container element
const container = document.getElementById('background-container') as HTMLElement;

// Set the background image
if (container) {
    container.style.backgroundImage = `url(${imageUrl})`;
}
// Select the form and result elements
const form = document.getElementById('text-form') as HTMLFormElement;
const textInput = document.getElementById('text-input') as HTMLInputElement;
const result = document.getElementById('result') as HTMLParagraphElement;

// Add an event listener for form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the text input
    const inputText: string = textInput.value;

    // Display the entered text in the result paragraph
    result.textContent = `You entered: ${inputText}`;
});
