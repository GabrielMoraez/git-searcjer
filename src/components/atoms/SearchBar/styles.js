const styles = () => ({
  input: {
    backgroundColor: '#ffffff',
    width: '800px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '15px',
    fontFamily: 'Segoe UI',
    paddingLeft: '20px',
    '&::after': {
      content: 'none',
    },
    '&::before': {
      content: 'none',
    },
  },
});

export default styles;
