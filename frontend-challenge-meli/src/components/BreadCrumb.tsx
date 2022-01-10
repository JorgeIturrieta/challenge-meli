import {AxiosError} from 'axios';
import React, {FunctionComponent} from 'react';
import SkeletonBreadCrum from './Skeletons/SkeletonBreadCrum';

type BreadCrumbProps = {
  categories: string[];
  loading?: boolean;
  error?: AxiosError<any, any> | null;
};
const BreadCrumb: FunctionComponent<BreadCrumbProps> = ({
  categories,
  loading,
  error,
}) => {
  if (error) {
    return null;
  }

  return (
    <>
      <div className="breadCrumb">
        {loading ? (
          <SkeletonBreadCrum />
        ) : (
          categories.map((category, idx) => (
            <span className="breadCrumb__item" key={idx}>
              {category}
            </span>
          ))
        )}
      </div>
    </>
  );
};

export default BreadCrumb;
