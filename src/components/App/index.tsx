import { Link, Route, Routes } from "react-router-dom";
import {AboutPageLazy} from "../AboutPage/AboutPage.lazy";
import {MainPageLazy} from "../MainPage/MainPage.lazy";
import {Suspense} from "react";
import '../../styles/index.scss';
import { useTheme } from './../../theme/useTheme';
import { classNames } from './../../helpers/classNames';


const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy/>}/>
          <Route path="/" element={<MainPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;