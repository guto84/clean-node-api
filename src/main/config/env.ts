export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://db/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'ba2d83a0-7f0d-4428-9d06-f51a53aab32f'
}
