// importing express fw
const express = require("express");
const multer = require('multer');
const jwt = require("jsonwebtoken");
const path = require('path');
const bodyParser = require('body-parser');
const { Client } = require('@googlemaps/google-maps-services-js');
const http = require('http');
const socketIO = require('socket.io');





// const server = http.createServer(app);
// const io = socketIO(server);

// Define your routes and middleware for the app


// importing cors
const cors=require("cors")





const dataservice = require("./service/data.service");

const root="C:\\Users\\jasee\\Desktop\\Main project\\Angular\\BTP-Server\\uploads\\"




//  creating server app
const app = express();[]
app.use('/uploads',express.static('./uploads'))





app.use(cors({
    origin:"http://localhost:4200"
   }))
  

   // to parse json to js
app.use(express.json());
const mongoose=require("mongoose")



mongoose.connect('mongodb://localhost:27017/BicycleTrip', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const tripSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

const Trip = mongoose.model('Trip', tripSchema);

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

  }
  
});

const upload = multer({ storage: storage });

app.get('/api/trips', async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch trips' });
  }
});

app.post('/api/trips/upload', upload.single('image'), async (req, res) => {
  try {
    const newTrip = new Trip({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.filename
    });

    const trip = await newTrip.save();
    res.json({ message: 'Trip saved successfully', trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save trip' });
  }
});

//    google map







// Serve Angular app
app.use(express.static(path.join(__dirname, 'angular-app-folder/dist/angular-app-name')));

// Handle frontend routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-app-folder/dist/angular-app-name/index.html'));
});

// Initialize Google Maps client
const googleMapsClient = new Client({});

// Example route to perform geocoding
app.get('/geocode', async (req, res) => {
  try {
    const { address } = req.query;
    const response = await googleMapsClient.geocode({ params: { address } });
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// // Define the Trip model
// const tripSchema = new mongoose.Schema({
//   title: String,
//   imageUrl: String
// });

// const Trip = mongoose.model('Trip', tripSchema);

// // Set up Multer for image upload
// const storage = multer.diskStorage({
//   destination: './public/uploads',
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// // Handle image upload
// app.post('/api/trips/upload', upload.single('image'), (req, res) => {
//   if (req.file) {
//     const imageUrl = req.file.filename;
//     const trip = new Trip({ imageUrl });

//     trip.save((err, savedTrip) => {
//       if (err) {
//         console.error('Error saving trip:', err);
//         res.status(500).json({ error: 'Failed to save trip' });
//       } else {
//         res.status(200).json(savedTrip);
//       }
//     });
//   } else {
//     res.status(400).json({ error: 'No image file provided' });
//   }
// });

// // Get all trips
// app.get('/api/trips', (req, res) => {
//   Trip.find({}, (err, trips) => {
//     if (err) {
//       console.error('Error fetching trips:', err);
//       res.status(500).json({ error: 'Failed to fetch trips' });
//     } else {
//       res.status(200).json(trips);
//     }
//   });
// });












app.post("/register", (req, res) => {
    const result = dataservice.register(
 
      req.body.uname,
      
      req.body.email,
      req.body.pswd
      
    );
    // console.log(usid)
    
    result.then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    });
  });
// add description
app.post("/adddp", (req, res) => {
    const result = dataservice.adddp(
 
      req.body.dp,
      
     
    );
    // console.log(usid)
    
    result.then((resobj) => {
      res.status(resobj.statusCode).send(resobj);
    });
  });

// LOGIN API
app.post("/login", (req, res) => {
  const result = dataservice.login(req.body.uname, req.body.pswd);
  // res.status(result.statusCode).json(result)
  result.then((resobj) => {
    res.status(resobj.statusCode).send(resobj);
  });
});


// chat
const router = express.Router();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle new chat messages
  socket.on('chatMessage', (message) => {
    // Broadcast the received chat message to all connected clients
    io.emit('chatMessage', message);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});



// Add a new chat message
router.post('/chats', (req, res) => {
  console.log(req.body.message)
  const { sender, message } = req.body;
  console.log(sender, message)
  const newChat = new Chat({
    sender,
    message
  });
console.log(newChat)
  newChat.save()
    .then(chat => {
      // Emit the new chat message to connected clients
      io.emit('chatMessage', chat);
      res.json(chat);
    })
    .catch(error => res.status(500).json({ error: 'Failed to add chat message' }));
});

// Get all chat messages
router.get('/chats', (req, res) => {
  Chat.find()
    .populate('sender')
    .sort({ timestamp: 'asc' })
    .then(chats => res.json(chats))
    .catch(error => res.status(500).json({ error: 'Failed to fetch chat messages' }));
});

  
// all-event

app.get('/allevent',(req,res)=>{

  dataservice.allevent().then(
      (result)=>{
          res.status(result.StatusCode).send(result)
      }

  )

})

// add-event
app.post('/addevent',(req,res)=>{
  dataservice.addevent(req.body.place,req.body.time,req.body.title,req.body.content)
  // console.log(req.body.place,req.body.time,req.body.title,req.body.content)
    .then((result)=>{
      res.status(result.statusCode).send(result)
    })
  
})


  1// configuring port number for server app
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
  