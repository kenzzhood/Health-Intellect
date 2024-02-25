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


while True:
    a = input("What questions do You have about the report: ")
    response = model.generate_content([a, img])

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
