# React + JSON Server on Heroku
How to run react and jsonserver on only one server in Heroku

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

# Credits
* [heroku-cra-node](https://github.com/mars/heroku-cra-node)
* [food-lookup-demo](https://github.com/fullstackreact/food-lookup-demo)
