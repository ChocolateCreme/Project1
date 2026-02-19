import { createContext, useState } from "react";

const UpdateProfileContext = createContext();

export default UpdateProfileContext;

export const ModeProvider = ({children}) => {
    const updateProfiles = (profile) => {
        setProfiles(pre => ([...pre, profile]))
    };

    return (
        <UpdateProfileContext.Provider value ={{updateProfiles}}>
            {children}
        </UpdateProfileContext.Provider>
    )
}