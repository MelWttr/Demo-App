import { Link } from "react-router-dom";
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from 'widgets/Navbar/ui/Navbar';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme || ''])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;