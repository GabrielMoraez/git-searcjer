const styles = () => ({
  card: {
    maxWidth: 350,
    minWidth: 275,
  },
  title: {
    fontSize: 23,
    fontWeight: 700,
    fontFamily: 'Segoe UI',
    textTransform: 'uppercase',
  },
  desc: {
    marginBottom: 20,
    fontSize: 13,
  },
  user: {
    fontSize: 15,
    color: '#2980b9',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  tech: {
    fontSize: 15,
    color: '#d35400',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  favs: {
    fontSize: 15,
    marginTop: 10,
    display: 'inline-block',
  },
  forks: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 50,
    display: 'inline-block',
  },
  text: {
    marginLeft: 5,
  },
});

export default styles;
