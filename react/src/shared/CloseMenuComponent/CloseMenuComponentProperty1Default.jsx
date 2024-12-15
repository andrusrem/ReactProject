import "./Property1.css";

export const CloseMenuComponentProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "close-menu-component-property-1-default-instance " +
        className +
        " " +
        variantsClassName
      }
      src="CloseMenuComponentProperty1Default.svg"
    />
  );
};
