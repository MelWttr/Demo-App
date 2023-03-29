import { Route, Routes } from 'react-router-dom';
import { Suspense, memo, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader/ui/Loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <div className="content-wrapper">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {
                        routes.map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
};

export default memo(AppRouter);
