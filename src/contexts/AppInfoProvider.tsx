import React, {createContext, useContext, useState} from 'react';
import {AppInfo} from '../types';

type ContextType = {
  appInfo: AppInfo;
  setAppInfo: React.Dispatch<React.SetStateAction<AppInfo>>;
};

const AppInfoContext = createContext<ContextType>({
  appInfo: {},
  setAppInfo: () => {},
});

type PropTypes = {
  children: React.ReactElement;
};

const AppInfoProvider = ({children}: PropTypes) => {
  const [appInfo, setAppInfo] = useState<AppInfo>({});

  return (
    <AppInfoContext.Provider value={{appInfo, setAppInfo}}>
      {children}
    </AppInfoContext.Provider>
  );
};

export default AppInfoProvider;

export const useAppInfo = () => {
  return useContext(AppInfoContext);
};
