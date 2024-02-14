import { parallel } from 'gulp';
import buildStyles from './tasks/buildStyles';
import buildScripts from './tasks/buildScripts';
import { styles, scripts, IS_PROD } from './303.config';

// Compose tasks here as needed.
export default parallel(buildStyles, buildScripts);
