type Props = {
  rounded?: boolean;
  width?: string | number;
  height?: number;
  background?: string;
  center?: boolean;
  style?: any;
  children?: React.ReactNode;
  my?: number
};

const Shape = ({
  rounded = false,
  width = "100%",
  height = 16,
  background = "rgb(247 247 247)",
  center = false,
  style = {},
  children,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width,
        height,
        background: children ? "transparent" : background,
        borderRadius: rounded ? "50%" : "0px",
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Shape;
