import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar } from '../widgets/Sidebar';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme || ''])}>
                <Navbar />
                <div className="page-wrapper">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;
