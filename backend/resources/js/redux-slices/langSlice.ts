import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';

interface LangSliceState {
    lang: string;
}

// Function to get language from local storage, if available
const getLanguageFromLocalStorage = () => localStorage.getItem('language') ?? 'en';

const initialState: LangSliceState = {
    lang: getLanguageFromLocalStorage(), // Initialize the language from local storage
};


const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload;
            i18n.changeLanguage(action.payload)

            // Store the selected language in local storage
            localStorage.setItem('language', action.payload);
        },
    },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;