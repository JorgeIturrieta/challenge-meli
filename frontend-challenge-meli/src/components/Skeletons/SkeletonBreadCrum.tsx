import React, {PropsWithChildren} from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonBreadCrum = () => {
  return (
    <Skeleton
      width={'80px'}
      baseColor="white"
      highlightColor="#eeeeee"
      wrapper={InlineWrapperWithMargin}
      inline
      count={3}
    />
  );
};

export default SkeletonBreadCrum;
function InlineWrapperWithMargin({children}: PropsWithChildren<unknown>) {
  return <span style={{marginRight: '1rem'}}>{children}</span>;
}
