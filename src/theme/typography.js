export const typography = {
  h1: {
    fontSize: '4rem', // 48px
    lineHeight: '4.5rem',
    fontWeight: '600',
    '@media (max-width: 992px)': {
      fontSize: '2.75rem', // 44px
      lineHeight: '3.3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem', // 32px
      lineHeight: '2.625rem',
    },
  },
  h2: {
    fontSize: '2.25rem', // 40px
    lineHeight: '3.75rem',
    '@media (max-width: 600px)': {
      fontSize: '1.875rem', // 30px
      lineHeight: '2.375rem',
    },
  },
  h3: {
    fontSize: '2rem', // 32px
    lineHeight: '3rem',
    '@media (max-width: 600px)': {
      fontSize: '1.625rem', // 26px
      lineHeight: '2.375rem',
    },
  },
  h4: {
    fontSize: '1.084rem', // 17px
    lineHeight: '1.62rem',
    fontWeight: '400',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      lineHeight: '1.75rem',
    },
  },
  h5: {
    fontSize: '1rem', // 16px
    lineHeight: '1.5rem',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      lineHeight: '1.4rem',
    },
  },

  body1: {
    fontSize: '0.87rem', // 14px
    lineHeight: '1.31rem',
    letterSpacing: '0.2px',
    fontWeight: '400',
  },
  body2: {
    fontSize: '1rem', // 16px
    lineHeight: '1.31rem',
    letterSpacing: '0.1px',
    fontWeight: '400',
  },
  small: {
    fontSize: '0.75rem', // 12px
    lineHeight: '0.87rem',
    letterSpacing: '0.1px',
    fontWeight: '400',
  },
};
