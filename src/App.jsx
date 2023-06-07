import { RouterProvider } from 'react-router-dom'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import router from './Routes/Routes'

const queryClient = new QueryClient()
function App() {
  return <QueryClientProvider client={queryClient}><RouterProvider router={router}></RouterProvider></QueryClientProvider>;
}

export default App
