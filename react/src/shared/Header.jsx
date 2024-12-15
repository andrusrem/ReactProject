import "./Heades.css";
import { LanguageComponentProperty1Default } from "./LanguageComponent/LanguageComponentProperty1Default.jsx";
import { BookingButtonProperty1Default } from "./BookingButton/BookingButtonProperty1Default.jsx";
import { Logo1Property1Default } from "./Logo/Logo1Property1Default.jsx";
import { CloseMenuComponentProperty1Default } from "./CloseMenuComponent/CloseMenuComponentProperty1Default.jsx";
import { LinkButtonProperty1Default } from "./LinkButton/LinkButtonProperty1Default.jsx";

export const Header = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={"menu-header-desktop " + className + " " + variantsClassName}
    >
      {property1 === "variant-3" && (
        <>
          <CloseMenuComponentProperty1Default className="close-menu-component-instance"></CloseMenuComponentProperty1Default>
        </>
      )}
      {(property1 === "default" || property1 === "variant-2") && (
        <>
          <div className="menu">MENU </div>
        </>
      )}
      <LanguageComponentProperty1Default className="language-component-instance"></LanguageComponentProperty1Default>
      {property1 === "variant-3" && (
        <>
          <LinkButtonProperty1Default className="link-button-instance"></LinkButtonProperty1Default>
          <LinkButtonProperty1Default className="link-button-instance2"></LinkButtonProperty1Default>
          <LinkButtonProperty1Default className="link-button-instance3"></LinkButtonProperty1Default>
        </>
      )}
      <BookingButtonProperty1Default className="booking-button-instance"></BookingButtonProperty1Default>
      <Logo1Property1Default className="component-1-instance"></Logo1Property1Default>
      {property1 === "variant-3" && (
        <>
          <LinkButtonProperty1Default className="link-button-instance4"></LinkButtonProperty1Default>
        </>
      )}
    </div>
  );
};

 
export default Header