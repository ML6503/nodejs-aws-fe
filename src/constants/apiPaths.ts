
const API_PATHS = {
  product: 'https://rxqgzhje6j.execute-api.eu-west-1.amazonaws.com/dev',
  order: 'https://rxqgzhje6j.execute-api.eu-west-1.amazonaws.com/dev', 
  import: 'https://90m4tsqga1.execute-api.eu-west-1.amazonaws.com/dev',
  // bff: 'http://ml6503-bff-api-dev.eu-west-1.elasticbeanstalk.com', # not secure http converted to https below
  bff: 'https://psl92kof03.execute-api.eu-west-1.amazonaws.com', 
  // cart: 'http://ml6503-cart-api-dev.eu-west-1.elasticbeanstalk.com/api' # not secure http converted to https below
  cart: 'https://8k5p7io0i0.execute-api.eu-west-1.amazonaws.com/api'
};

export default API_PATHS;
