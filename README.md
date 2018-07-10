# React + JSON Server on Heroku
How to use create-react-app + json-server (mock) on Heroku 

# Local Development

### Run JSON Server
```bash
# Initial setup
npm install

# Start the server
npm start 
```

### Run React client-side
```bash
# Change directory
cd client/

# Inital setup
npm install

# Start the server
npm start
```

# Deploy to Heroku
```bash
git clone https://github.com/thiagoleitedev/react-jsonserver-heroku.git
cd react-jsonserver-heroku/
heroku create
git push heroku master
```

## Credits
https://github.com/mars/heroku-cra-node
https://github.com/fullstackreact/food-lookup-demo
