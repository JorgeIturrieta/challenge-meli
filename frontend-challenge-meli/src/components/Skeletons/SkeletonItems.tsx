import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonItems = () => {
  return (
    <>
      {[1, 2, 3, 4].map(id => (
        <div className="card" key={id}>
          <div className="link-item">
            <div className="card__image-container">
              <Skeleton height="100%" />
            </div>
            <div className="card__description">
              <div>
                <div className="card__price">
                  <span>
                    <Skeleton width="125px" />
                  </span>
                </div>
                <div className="card__title">
                  <Skeleton width={'100%'} count={3} />
                </div>
              </div>

              <div className="card__location">
                <span>
                  <Skeleton width="45px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonItems;
