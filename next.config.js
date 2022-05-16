/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig




module.exports = (phase) => {

  // next.config.js object
  return {
    env:{
      DBPASSWORD:"Dtgfu1314",
      DBUSERNAME:"LitoTech",
      DBNAME:"AudioUploadDB"
    }
  }
}