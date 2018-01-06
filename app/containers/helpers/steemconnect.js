import steemconnect from 'steemconnect';

const env = process.env.NODE_ENV;

let data = {
  app: 'damaera',
  callbackURL: 'http://localhost:3000',
};

if (env === 'production') {
  data = {
    app: 'damaera',
    callbackURL: 'https://produktif.netlify.com',
  };
}

steemconnect.init(data);

export default steemconnect;
