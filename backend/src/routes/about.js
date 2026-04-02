const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.json({
    app:     process.env.APP_NAME      || 'TodoApp',
    student: process.env.STUDENT_NAME  || 'Lê Công Gia Bình',
    id:      process.env.STUDENT_ID    || '2151220053',
    class:   process.env.STUDENT_CLASS || '21CT6',
  });
});

module.exports = router;