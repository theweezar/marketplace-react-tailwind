const myTheme = {
  white: '#ffffff',
  gray1: '#a1a6b6',
  gray2: '#6b7185',
  gray3: '#3a3f50',
  gray4: '#282b39',
  gray5: '#242735',
  gray6: '#11131b',
  black: '#000000',
  primary1: '#99c1f8',
  primary2: '#6ea7f5',
  primary3: '#3082f2',
  primary4: '#046cfc',
  primary5: '#004eba',
  primary6: '#1c2f50',
  success1: '#b8ecd5',
  success2: '#8ae0ba',
  success3: '#58d49d',
  success4: '#10c274',
  success5: '#048a4f',
  warning1: '#fce2ac',
  warning2: '#fad076',
  warning3: '#f8bc3b',
  warning4: '#f7ac0a',
  warning5: '#bd850f',
  danger1: '#feb4b6',
  danger2: '#f28286',
  danger3: '#fe4c52',
  danger4: '#fe383f',
  danger5: '#be3637'
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xml: '1400px',
      xxl: '1600px',
      fhd: '1920px',
      rt: '2560px',
      rt15: '2880px',
      uhd: '3840px',
      s4k: '4096px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      ...myTheme
     }),
     borderColor: theme => ({
      ...theme('colors'),
      ...myTheme
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
