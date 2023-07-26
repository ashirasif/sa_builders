import logo_img from "../../public/logo_2.jpg";

function Logo() {
  return (
    <div className="basis-12">
      <img className="aspect-auto" src={logo_img} />
    </div>
  );
}

function NavBar({ cont }) {
  return (
    <div className="nav-bar w-full flex flex-row text-white justify-evenly gap-5 lg:block">
      <Logo />
      {Object.keys(cont).map((key) => (
        <a href={cont[key]} key={key} className="basis-auto">
          {key}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
