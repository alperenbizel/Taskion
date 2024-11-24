const express = require('express'); 
const dotenv = require('dotenv').config(); 
const connectDB= require('./Config/db')
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const tagRoutes = require('./routes/tagRoutes');
const commentRoutes = require('./routes/commentRoutes');
const fileRoutes = require('./routes/fileRoutes');
const activityRoutes = require('./routes/activityRoutes');
const sharingRoutes = require('./routes/SharingRoutes');
const cors =require('./Middleware/CorsMidddleware')
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 



app.use(cors);

// app.use(cors({
//   origin: 'http://localhost:5173', // Frontend adresi
//   credentials: true, // Cookies ve headers
// }));
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' http://localhost:5000; img-src 'self' data:; font-src 'self';"
  );
  next();
});

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/share', sharingRoutes);

connectDB()
const PORT = process.env.PORT ; 

app.listen(PORT, () => {
    console.log('Server is running...'); 
});
