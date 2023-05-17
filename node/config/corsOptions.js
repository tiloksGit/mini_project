const allowedOrigins = require("./allowedOrigin");
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  optionsSuccessStatus: 200,
  Credentials: true,
};

module.exports = corsOptions;
