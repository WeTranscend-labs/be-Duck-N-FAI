
# DuckStrike - Backend

## Project Overview
The **DuckStrike Backend** is the server-side component of the DuckStrike platform, designed to support seamless cryptocurrency management and AI-powered interactions. It integrates blockchain technology, cryptocurrency APIs, and AI models to enable real-time transaction processing, market analysis, and personalized assistance for users.

## Deployment
To deploy this project locally, you can use the following steps to set up the environment and launch the application.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/WeTranscend-labs/be-duckstrike.git
    cd be-duckstrike
    ```
2. Install dependencies:
    ```bash
	npm install
    ```
3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
		```env
		BINANCE_API_KEY=<your-binance-key>
		BINANCE_API_SECRET=<your-binance-secret>
		CMC_API_KEY=<your-coin-market-cap-key>
		GOOGLE_GENERATIVE_AI_API_KEY=<your-google-cloud-key>
		```
4. Start the development server:
   ```bash
   npm run dev
   ```
5.  Test the API
-   After starting the development server, use Postman or any similar API testing tool to send requests directly to [http://localhost:8080/api/chat](http://localhost:8080/api/chat) using the **POST** method.
-   Test the API endpoint by sending a POST request and check the response to ensure the functionality is working as expected.

## Technologies Used

The DuckStrike Backend utilizes a variety of modern technologies to provide a secure, scalable, and efficient server-side architecture. Below are the key technologies used in this project:

- **Next.js**: A React framework that provides server-side rendering (SSR) and static site generation (SSG) for building fast and optimized web applications. It is used to create API routes and manage server-side operations.
  
- **React**: A JavaScript library for building user interfaces. React is used on the backend to enable server-side rendering of components and rendering static content.

- **TypeScript**: A superset of JavaScript that adds static types, improving tooling, and error checking during development, ensuring safer and more maintainable code.

- **AI SDKs**:
  - **Google Generative AI SDK**: Integrated to provide advanced AI-driven capabilities, including personalized content, chatbots, and AI-powered predictions.
  - **AI SDK**: Used to integrate artificial intelligence functionality to enhance the backend with smart features.

- **Axios**: A promise-based HTTP client for making HTTP requests from the backend to external APIs. Axios is used for making API calls to fetch cryptocurrency market data and interact with other services.

- **Tailwind CSS**: A utility-first CSS framework that makes it easy to build responsive and customizable user interfaces. Tailwind is used on the backend for styling purposes, such as server-side rendered components.

- **ESLint & Prettier**: Tools for linting and formatting JavaScript/TypeScript code, ensuring code quality and consistency across the project.

- **PostCSS**: A tool for transforming CSS with JavaScript plugins, helping optimize and extend the capabilities of CSS for the backend's styling.

These technologies work together to provide a secure, scalable, and optimized backend for DuckStrike, leveraging blockchain, cryptocurrency data, and AI features to offer a powerful, user-friendly platform.


## Project Structure
```
.  
├── public/                    # Contains static assets like images, fonts, and other files that are publicly accessible.  
├── src/                       # The main source code directory containing application logic and structure.  
│   ├── app/                   # Contains the main application logic and routing structure for API routes and server-side code.  
│   ├── lib/                   # Utility functions and helper libraries that support backend functionality, like database handling or service integrations.  
│   └── middleware.ts          # Custom middleware for handling requests, responses, and any server-side processing before sending data to the client.  
└── .env                       # Environment configuration file containing sensitive keys, API tokens, and environment-specific settings.  

```

## Contributing

Contributions are welcome! If you'd like to contribute to DuckStrike, please fork the repository, make your changes, and submit a pull request. We appreciate your help!

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.





