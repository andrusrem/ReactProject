import "./Property1.css";

export const Logo1Property1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "logo-1-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="a">A </div>
      <div className="ellipse-4"></div>
      <div className="_2">2 </div>
    </div>
  );
};