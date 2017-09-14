var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://192.168.1.109:27017/ToDoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://192.168.1.109:27017/TodoAppTest';
}
