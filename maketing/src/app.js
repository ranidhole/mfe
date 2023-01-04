import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StylesProvider, stylesProvider } from '@material-ui/core/styles';

import Pricing from './components/pricing';
import Landing from './components/landing';


export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />}>
                            <Route path="/pricing" element={<Pricing />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}