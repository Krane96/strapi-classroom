module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7473526cde790a535a3ad526faafc680'),
  },
});
