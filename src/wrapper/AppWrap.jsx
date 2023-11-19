import SocialMedia from "../components/SocialMedia";

function AppWrap(Component, idName, classNames, links = false) {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {links && <SocialMedia />}
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };
}

export default AppWrap;
