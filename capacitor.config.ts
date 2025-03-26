import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.isc.meik.app',
  appName: 'meikApp',
  webDir: 'dist/meik-app/browser',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  android: {
    allowMixedContent: true
  },
  server: {
    allowNavigation: ['*.industrieschule.com'], // Füge hier deinen Domainnamen hinzu
  },
};

export default config;
