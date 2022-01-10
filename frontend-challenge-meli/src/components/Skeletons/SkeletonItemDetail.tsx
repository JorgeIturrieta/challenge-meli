import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonItemDetail = () => {
  return (
    <div className="card-item">
      <div className="card-item__detail">
        <div className="card-item__image-container">
          <div className="card-item__image-detail">
            <Skeleton height={'150px'} />
          </div>
          <div className="card-item__description">
            <h2 className="card-item__product-desc-title">
              <Skeleton width={'60%'} />
            </h2>
            <p className="card-item__description-item">
              <Skeleton count={8} style={{margin: '10px'}} />
            </p>
          </div>
        </div>
        <div className="card-item__detail-product">
          <span className="card-item__product-new">
            <Skeleton width={'120px'} />
          </span>
          <div className="card-item__product-title">
            <h2>
              <Skeleton count={2} width={'300px'} />
            </h2>
          </div>
          <div className="card-item__product-price">
            <div>
              <span>
                <Skeleton />
              </span>
            </div>

            <div className="button">
              <Skeleton width={'100%'} height={'100%'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonItemDetail;
