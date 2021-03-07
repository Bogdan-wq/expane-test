import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { QueryClientProvider,QueryClient } from "react-query";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});


ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ReactNotification />
        <App />
    </QueryClientProvider>
,
  document.getElementById('root')
);

