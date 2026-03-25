const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {

    await User.deleteMany({}); // optional clean

    await User.create([
      {
        fullname: 'Admin User',
        email: 'admin@example.com',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin',
      },
      {
        fullname: 'Manager User',
        email: 'manager@example.com',
        password: await bcrypt.hash('manager123', 10),
        role: 'manager',
      },
      {
        fullname: 'Developer User',
        email: 'developer@example.com',
        password: await bcrypt.hash('dev123', 10),
        role: 'developer',
      },
    ]);

    console.log('Users created successfully');

    await mongoose.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
