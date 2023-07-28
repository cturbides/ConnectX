# ConnectX - Build Experiences, Ideas, and Thoughts with Video Calls

ConnectX is a simple web application for video and audio calls, allowing you to connect with others in the same room and exchange great ideas!

## Features

- Beautiful UI.
- Real-time video and audio calls using Agora.io.
- Seamless integration with React, Typescript, and TailwindCSS.
- Scalable and maintainable codebase with ESLint for code quality.

## Dependencies

ConnectX utilizes the following technologies and libraries:

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Agora.io](https://www.agora.io/en/)
- [React Router](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Installation

Follow these steps to set up ConnectX on your local machine:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/connectx.git
   cd connectx
   ```

2. Install dependencies using Yarn:

   ```sh
   yarn install
   ```
  
   Alternatively, you can use npm:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your AgoraSDK API Key:

   ```sh
   touch .env
   echo "REACT_APP_KEY=your_api_key" >> .env
   ```

4. Start the development server:

   ```sh
   yarn start
   ```

   Alternatively, you can use npm:

   ```sh
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access ConnectX.

## License

ConnectX is licensed under the [MIT License](./LICENSE).