import Shape from "./Shape";

type Props = {
  size?: number;
  children?: React.ReactNode;
  center?: boolean;
  my?: number;
  mx?: number;
  style?: any;
};

const Round = ({
  size = 64,
  center = false,
  my = 0,
  mx = 0,
  children,
  style = {},
}: Props) => {
  return (
    <>
      <Shape
        style={{
          marginRight: center ? "auto" : mx,
          marginLeft: center ? "auto" : mx,
          marginTop: my,
          marginBottom: my,
          ...style,
        }}
        rounded={true}
        height={size}
        width={size}
      >
        {children}
      </Shape>
    </>
  );
};

export default Round;
