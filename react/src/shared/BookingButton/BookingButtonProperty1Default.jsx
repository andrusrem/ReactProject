import "./Property1.css";

export const BookingButtonProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "booking-button-property-1-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="rectangle-3"></div>
      <div className="book">Book </div>
    </div>
  );
};
