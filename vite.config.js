import { resolve } from 'path';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// This loads environment variables. If you don't use a .env file, you can remove this.
// Note: The path might need to be adjusted if your .env is elsewhere.
dotenv.config({ path: '../../.env' }); 

export default defineConfig({
  // The public directory is 'assets'. This is kept from your original config.
  // Make sure your static files (like images, favicons) are in this folder.
  publicDir: "assets",

  build: {
    // This ensures the 'dist' folder is cleared before each build.
    emptyOutDir: true,
    
    // This is the CRUCIAL part for multi-page routing
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        mess: resolve(__dirname, 'mess.html'),
        home: resolve(__dirname, 'home.html')
      },
    
    },
  },
});