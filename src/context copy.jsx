import { createContext, useEffect, useState, useContext } from "react";

//create a context object
const AppContext = createContext();

//create a provider for AppContext
export const AppProvider = ({ children }) => {
  //state value dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //function to toggle the dark theme
  const toggleDarkTheme = () => {
    //create new dark theme variable and set it to the opposite of the dark them state value
    const newDarkTheme = !isDarkTheme;

    //set state value
    setIsDarkTheme(newDarkTheme);

    //add class element 'dark-theme' to the body by toggling the theme
    //select html body element and assign it to a variable
    const body = document.querySelector("body");

    //classList = returns the list of class available to an element
    //access the js toggle method and provide/add the class dark-theme and newDarkTheme variable.
    //this will allow the button to add and remove the dark-theme class whenever the button is clicked
    body.classList.toggle("dark-theme", newDarkTheme);
    console.log(body);
  };

  return (
    //pass down the isDarkTheme and toggleDarkTheme to the provider
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

//create a global hook AppContext
export const useGlobalContext = () => useContext(AppContext);
