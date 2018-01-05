import steemconnect from 'steemconnect';

steemconnect.init({
  app: 'damaera',
  callbackURL: 'http://localhost:3000/',
});

export default steemconnect;
