import streamlit as st
import pandas as pd
from PIL import Image
from scipy.spatial import distance
import cv2
import numpy as np

# Predefined RGB values for basic colors
color_names = {
    "red": [255, 0, 0],
    "blue": [0, 0, 255],
    "yellow": [255, 255, 0],
    "green": [0, 255, 0],
    "black": [0, 0, 0],
    "white": [255, 255, 255],
    "pink": [255, 192, 203],
    "purple": [128, 0, 128],
    "orange": [255, 165, 0],
    "brown": [165, 42, 42]
}

# Load dataset
dataset = pd.read_csv("color_combinations.csv")

# Detect dominant color
def detect_dominant_color(image_path):
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    reshaped_image = image.reshape((-1, 3))
    reshaped_image = np.float32(reshaped_image)
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
    k = 1
    _, _, palette = cv2.kmeans(reshaped_image, k, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)
    dominant_color = palette[0].astype(int)
    return dominant_color

# Get closest color name
def get_closest_color(rgb):
    closest_color = None
    min_distance = float('inf')
    for name, value in color_names.items():
        dist = distance.euclidean(value, rgb)
        if dist < min_distance:
            min_distance = dist
            closest_color = name
    return closest_color

# Get recommendations
def get_recommendations(color_name, dataset):
    recommendations = dataset[dataset["Base Color"] == color_name]["Complementary Colors"].values
    return recommendations[0].split(", ") if len(recommendations) > 0 else ["No recommendations found."]

# Streamlit App
st.title("Clothing Color Recommendation")
st.write("Upload an image of clothing, and get complementary color suggestions!")

uploaded_file = st.file_uploader("Upload an image", type=["jpg", "png", "jpeg"])
if uploaded_file:
    # Save the uploaded image
    with open("uploaded_image.jpg", "wb") as f:
        f.write(uploaded_file.getbuffer())

    # Display the uploaded image
    st.image(uploaded_file, caption="Uploaded Image", use_column_width=True)

    # Process the image
    dominant_color = detect_dominant_color("uploaded_image.jpg")
    detected_color_name = get_closest_color(dominant_color)
    st.write(f"Detected Color: {detected_color_name}")

    # Get recommendations
    recommendations = get_recommendations(detected_color_name, dataset)
    st.write(f"Recommended pairings: {', '.join(recommendations)}")
