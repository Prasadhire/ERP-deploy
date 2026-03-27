const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {

    console.log("Connected to MongoDB ✅");

    // optional: clean old users
    await User.deleteMany({});

    const users = [
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
    ];

    await User.insertMany(users);

    console.log("Users created successfully 🔥");
    console.log("Admin    → admin@example.com / admin123");
    console.log("Manager  → manager@example.com / manager123");
    console.log("Developer→ developer@example.com / dev123");

    await mongoose.disconnect();
    process.exit(0);

  })
  .catch(err => {
    console.error("Error:", err);
    process.exit(1);
  });
