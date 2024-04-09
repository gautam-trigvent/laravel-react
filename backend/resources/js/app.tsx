import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';

declare global {
    interface ImportMeta {
        glob: (pattern: string, options?: { eager: boolean }) => Record<string, any>;
    }
}

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <Provider store={store}>
                    <App {...props} />
                </Provider>
            </React.StrictMode>
        )
    },
})