import React from 'react';

const ContainerDefualt = ({
  defaultStyles = 'space-y-4 xl:w-3/5 2xl:w-2/5 mx-auto',
  className = '',
  children,
}) => {
  return <div className={`${defaultStyles} ${className}`}>{children}</div>;
};

export default function Container({ type, className, defaultStyles, children }) {
  const props = {
    children,
    className,
    defaultStyles,
  };
  switch (type) {
    default:
      return ContainerDefualt(props);
  }
}
