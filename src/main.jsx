import ReactDOM from 'react-dom/client'
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import App from './App.jsx'
import './main.css'

const client = new ApolloClient({
  uri : "https://graphqlzero.almansi.me/api",
  cache : new InMemoryCache(),
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
) 
