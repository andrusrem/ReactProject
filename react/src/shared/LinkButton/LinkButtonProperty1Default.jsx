import "./Property1.css";

export const LinkButtonProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "link-button-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="home">Home </div>
    </div>
  );
};
