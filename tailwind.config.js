module.exports = {
  content: [
    './src/pages/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
      fontSize: {
        // 'xs': '0.75rem',    // Extra small
        // 'sm': '0.875rem',   // Small (this will override the default sm)
        // 'base': '2rem',     // Base (this will override the default base)
        // 'lg': '1.125rem',   // Large
        // 'xl': '1.25rem',    // Extra large
        // '2xl': '1.5rem',
        // '3xl': '1.875rem',
        // '4xl': '2.25rem',
        // '5xl': '3rem',
        // '6xl': '3.75rem',
        // '7xl': '4.5rem',
        // '8xl': '6rem',
        // '9xl': '8rem',
        // 'tiny': '0.625rem', // Your custom tiny size
        // 'giant': '5rem',   // Your custom giant size
        // You can add more custom sizes here
      },
    },
  },
  plugins: [],
};