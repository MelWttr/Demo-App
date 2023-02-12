import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <div className="content-wrapper">
            <Suspense fallback={<div>...Loading</div>}>
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
