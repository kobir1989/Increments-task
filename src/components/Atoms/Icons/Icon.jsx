import { IconsMap } from './iconsMap';

const Icon = ({ name, style, ...props }) => {
  const Icons = IconsMap[name];
  return <Icons style={style} {...props} />;
};

export default Icon;
