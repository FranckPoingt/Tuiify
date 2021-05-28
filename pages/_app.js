
import '../styles/globals.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from '../components/Layout';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#30475e"
    },
    secondary: {
      main: "#f05454"
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

  )
}

export default MyApp
