import Shape from "./Shape";

type Props = {
  rounded?: boolean;
  width?: string | number;
  height?: number;
  background?: string;
  center?: boolean;
  style?: any;
  children?: React.ReactNode;
  repeat?: number;
  mx?: number;
  my?: number;
};

const Square = ({ children, repeat, style, mx, my, center, ...rest }: Props) => {
  const styles = {
    marginRight: center ? "auto" : mx,
    marginLeft:center ? "auto" : mx,
    marginTop: my,
    marginBottom: my,
    ...style,
  };
  return (
    <>
      {repeat === 1 ? (
        <Shape style={styles} {...rest}>
          {children}
        </Shape>
      ) : (
        <>
          {Array(repeat)
            .fill(null)
            .map((_, index) => (
              <Shape
                style={styles}
                key={`square_single_item_${index}`}
                {...rest}
              >
                {children}
              </Shape>
            ))}
        </>
      )}
    </>
  );
};

export default Square;
