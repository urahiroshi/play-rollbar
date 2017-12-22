import Rollbar from 'rollbar';

if (process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN && process.env.REACT_APP_RELEASE) {
  console.log('### Configure ROLLBAR');
  Rollbar.configure({
      accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
      payload: {
          environment: 'development',
          client: {
            javascript: {
              source_map_enabled: true,
              code_version: process.env.REACT_APP_RELEASE,
              guess_uncaught_frames: true
            }
          }
      }
  });
} else {
  console.log('### NOT Configure ROLLBAR');
}
