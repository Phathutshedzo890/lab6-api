/**
 * @file dev env
 * @author Phathutshedzo Mudau <Phathutshedzorofhiwa@gmail.com>
 */

import merge from 'webpack-merge';
import prodEnv from './prod.env';

export default merge(prodEnv, {
    NODE_ENV: JSON.stringify('development')
});
