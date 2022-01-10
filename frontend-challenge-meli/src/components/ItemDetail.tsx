import React, {FunctionComponent} from 'react';
import {ItemDescription} from '../interfaces/item-description.interface';
import shipping from '../assets/ic_shipping2x.png';
import {AxiosError} from 'axios';

import SkeletonItemDetail from './Skeletons/SkeletonItemDetail';
import ServerError from './Errors/ServerError';
type ItemDetailProps = {
  data: ItemDescription;
  loading: boolean;
  error: AxiosError<any, any> | null;
};

const ItemDetail: FunctionComponent<ItemDetailProps> = ({
  data,
  loading,
  error,
}) => {
  return (
    <>
      {loading ? (
        <SkeletonItemDetail />
      ) : (
        <div className="card-item">
          {error ? (
            <ServerError
              error={error?.response?.data.message ?? error?.message}
            />
          ) : (
            <div className="card-item__detail">
              <div className="card-item__image-container">
                <img
                  className="card-item__image-detail"
                  src={data.items.picture}
                  alt={data.items.picture}
                />
                <div className="card-item__description">
                  <h2 className="card-item__product-desc-title">
                    Descripción del producto
                  </h2>
                  <p className="card-item__description-item">
                    {data.items.description}
                  </p>
                </div>
              </div>
              <div className="card-item__detail-product">
                <span className="card-item__product-new">
                  {data.items.condition === 'new' ? 'Nuevo - ' : ''}
                  {`${data.items.sold_quantity} vendidos`}{' '}
                </span>
                <div className="card-item__product-title">
                  <h2>{data.items.title}</h2>
                </div>
                <div className="card-item__product-price">
                  <div>
                    <span>
                      ${' '}
                      {new Intl.NumberFormat('de-DE').format(
                        data.items.price.amount,
                      )}
                      <span className="card-item__price-cents">
                        {!data.items.price.decimals
                          ? '00'
                          : data.items.price.decimals}
                      </span>
                    </span>
                    {data.items.free_shipping ? (
                      <img
                        className="card-item__product__shipping"
                        src={shipping}
                        alt="shipping"
                      />
                    ) : null}
                  </div>

                  <button className="button button-purchase">Comprar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ItemDetail;
