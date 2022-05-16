/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig




module.export = (phase) => {

  // next.config.js object
  return {
    env:{
      DBPASSWORD:"66YZ3w6oRXuvSy2s",
      DBUSERNAME:"Litotechenterprise",
      DBNAME:"AudioUploadDB"
    }
  }
}