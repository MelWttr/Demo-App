import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ui/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from './app/providers/StoreProvider';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>

    </BrowserRouter>,
    document.getElementById('root'),
);
