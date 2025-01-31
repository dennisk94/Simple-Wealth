// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.tsx",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '500px',
      'mb': '768px',
      // 'lg': '1024px'
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'brandGray': '#374151',
      'brandGreen': '#20c20e',
    },
    zIndex: {
      '999999': '999999',
    },
    spacing: {
      'desktopMaxWidth': '1200px',
      '20': '20px',
      '40': '40px',
      '50': '50px',
    },
    padding: {
      '5': '5px',
      '10': '10px',
      '20': '20px',
    },
    borderRadius: {
      '2': '2px',
    },
    gap: {
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '40': '40px',
    },
    gridColumn: {
      'bottom-start': 'grid-column: 1/2'
    }
  }
}