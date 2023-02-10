import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from './../widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme || ''])}>
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;