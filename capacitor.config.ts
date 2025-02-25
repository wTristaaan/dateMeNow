import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'dateMeNow',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#0B053000",
      launchFadeOutDuration: 0,
      splashFullScreen: true,
      useDialog: false,
    },
    Contacts: {
      presentationOptions: ["email", "phone"]
    }
  },
};

export default config;
