import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  //destructure dark theme variable in use global context
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      {/* <button className='dark-toggle' onClick={() => toggleDarkTheme()}> */}
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className='toggle-icon' />
        ) : (
          <BsFillMoonFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
