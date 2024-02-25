import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
import requests
import PIL.Image

GOOGLE_API_STUDIO = 'AIzaSyCP4wztT4_JDQ2jgQvd7obWBILegFpH0m8'

genai.configure(api_key=GOOGLE_API_STUDIO)

model = genai.GenerativeModel('gemini-pro-vision')

img = PIL.Image.open("C:/Users/Goutham Srinath/Downloads/WhatsApp Image 2024-01-26 at 10.48.55.jpeg")
img


a = "Explain my health condition and suggest any suggestions "
response = model.generate_content([a, img])


full_output = ""
for result in response._result.candidates:
    for part in result.content.parts:
        full_output += part.text
print(f"Gemini: {full_output}")
