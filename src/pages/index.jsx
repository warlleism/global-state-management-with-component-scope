import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

const Component1 = lazy(() => import('../templates/component1'));
const Component2 = lazy(() => import('../templates/component2'));

const Component1Provider = lazy(() => import('../contexts/component1Context'));
const Component2Provider = lazy(() => import('../contexts/component2Context'));

const LoadingFallback = <div>Loading...</div>;

const Pages = () => {
    return (
        <Suspense fallback={LoadingFallback}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Component1Provider>
                        <Suspense fallback={<div>Loading Component1...</div>}>
                            <Component1 />
                        </Suspense>
                    </Component1Provider>} />
                    <Route path="/component2" element={<Component2Provider>
                        <Suspense fallback={<div>Loading Component1...</div>}>
                            <Component2 />
                        </Suspense>
                    </Component2Provider>} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default Pages;
