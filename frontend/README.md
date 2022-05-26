# Simple Chat in React

This is a demo Chat application built with SignalWire Chat API and React.

# Setup Your Environment File
Copy the `env.example` and fill in your credentials. You can find your API Credentials (API Token, Space URL, and Project ID) in the API tab of your SignalWire Space. Save this new file as `.env`.

# Run the Code
 ## Natively
 To run the application natively, clone the repo and use the command `npm run start`.

 ## With Docker
Build the image with `docker build -t chatdemo .` 

Then run the container with `docker run --publish 3001:3001 --env-file .env chatdemo`

# Walkthrough
Find a full walkthrough in the [Using Chat with React](https://developer.signalwire.com/apis/docs/build-a-react-chat-application) guide.