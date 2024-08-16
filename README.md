## Introduction

Welcome to the AI-Powered T-Shirt Design Generator project! This project combines the capabilities of artificial intelligence with the creativity of design to generate unique and captivating designs 
for t-shirts.The AI-Powered T-Shirt Design Generator is a web application that utilizes AI prompts to generate custom t-shirt designs. It is built using ReactJS for the frontend and Django for the 
backend. Users can input prompts, such as themes or concepts, and the AI model generates corresponding design suggestions. These designs can then be customized and downloaded by the users.

## Implementation video

[![Watch the video](https://img.youtube.com/vi/4lGtHcg2RFM/0.jpg)](https://www.youtube.com/watch?v=4lGtHcg2RFM)

## Technologies Used

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Vite
- Tailwind CSS
- Django
- Django Rest Framework
- OpenAI
- Framer Motion
- Valtio

## Features

**Colour Customization**: Users can choose any colour prom the pallete if they prefer plain designs

**Uploading Logo**: Users can upload a logo image if they want it on the Tshirt

**Uploading Texture**: Users can also upload a texture image for the Tshirt if they don't like plain colours

**AI-Generated Logo**: Utilize AI to generate logos and intelligently apply them to the 3D shirt.

**AI-Generated Textures**: Implement AI-generated textures for enhanced 3D shirt customization.

**Downloading Option**: Once the user is satisfied with the Tshirt Design, they can download it.

**Enhanced User Experience**: Dynamically changes the application theme based on the selected color, enhancing user experience

**Responsive 3D Application**: Ensure the application is responsive, delivering a seamless experience across various devices.

**Framer Motion Animation**: Implement framer motion animations for smooth transitions between different 3D models.

## Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jinesh-Jain1507/AI-T-Shirt-Designer.git

2. **Navigate to the project directory**:
   ```bash
   cd AI-T-Shirt-Designer

3. **Install  Node Modules**

   Install the project dependencies using npm in the frontend file(Tshirt Design):
      ```bash
      npm install
      ```

5. **Set Up Environment Variables**

   Create a new file named `.env` in the same folder as `.env.sample` and add your secret key. You can obtain these credentials by signing up on the [OpenAI website](https://openai.com/).

6. **Running the Project**

   - TshirtBackend
   ```bash
   python manage.py runserver
   ```
   - TshirtDesign
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) to access the website.

