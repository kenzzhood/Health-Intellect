import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
import requests
import PIL.Image

GOOGLE_API_STUDIO = 'AIzaSyCP4wztT4_JDQ2jgQvd7obWBILegFpH0m8'

genai.configure(api_key=GOOGLE_API_STUDIO)

model = genai.GenerativeModel('gemini-pro-vision')

img = PIL.Image.open("C:/Users/Goutham Srinath/Downloads/1703562301.webp")
img

new_size = (200, 200)
img = img.resize(new_size)

while True:
    a = input("What questions do You have about the report: ")
    response = model.generate_content([ a+"(tell me in a doctor's tone)w: ", img], stream=True)

    try:
        full_output = ""
        for result in response._result.candidates:
            for part in result.content.parts:
                full_output += part.text
        print(f"Gemini: {full_output}")
    except AttributeError:
        print("Gemini was unable to provide a complete response.")

    if input("Do you want to ask another question? (yes/no): ").lower() == "no":
        break
