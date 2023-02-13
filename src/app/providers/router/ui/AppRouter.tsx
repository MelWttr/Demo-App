import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader/ui/Loader';

export function AppRouter() {
    return (
        <div className="content-wrapper">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {
                        Object.values(routeConfig).map(({ path, element }) => (
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
}
