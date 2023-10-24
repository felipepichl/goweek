import mongoose from 'mongoose';

mongoose.connect(
  process.env.MONGODB_URL
  // 'mongodb+srv://goweek:goweek@maincluster.yquxs.mongodb.net/week08?retryWrites=true&w=majority'
);
