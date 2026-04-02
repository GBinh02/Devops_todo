require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const pool    = require('./config/db');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks',  require('./routes/tasks'));
app.use('/health', require('./routes/health'));
app.use('/about',  require('./routes/about'));

// Khởi tạo bảng nếu chưa có
async function initDB() {
  const conn = await pool.getConnection();
  await conn.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      title      VARCHAR(255) NOT NULL,
      done       BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  conn.release();
  console.log('✅ Database ready');
}

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 ${process.env.APP_NAME} running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ DB init failed:', err.message);
    process.exit(1);
  });