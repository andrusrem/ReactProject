import "./Property1.css";

export const LanguageComponentProperty1Default = ({
  property1 = "default",
  property2 = "pro",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "language-component-property-1-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="en">EN </div>
    </div>
  );
};
