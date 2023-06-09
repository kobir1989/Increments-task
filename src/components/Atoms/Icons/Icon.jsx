import { IconsMap } from './iconsMap';

const Icon = ({ name, ...props }) => {
  const Icons = IconsMap[name];
  return <Icons {...props} />;
};

export default Icon;
