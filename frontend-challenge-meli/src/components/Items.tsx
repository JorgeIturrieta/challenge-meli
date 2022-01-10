import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {Items} from '../interfaces/items.interface';
import shipping from '../assets/ic_shipping2x.png';
import {AxiosError} from 'axios';
import SkeletonItems from './Skeletons/SkeletonItems';
import ServerError from './Errors/ServerError';

type SectionItemsProps = {
  data: Items;
  loading: boolean;
  error?: AxiosError<any, any> | null;
};
const SectionItems: FunctionComponent<SectionItemsProps> = ({
  data,
  loading,
  error,
}) => {
  return (
    <>
      {loading ? (
        <SkeletonItems />
      ) : (
        <>
          {error ? (
            <ServerError
              error={error?.response?.data.message ?? error?.message!}
            />
          ) : (
            data.items.map(item => (
              <div className="card" key={item.id}>
                <Link
                  className="link-item"
                  key={item.id}
                  to={`/items/${item.id}`}>
                  <div className="card__image-container">
                    <img
                      className="card__image-thumbnail"
                      src={item.picture}
                      alt={item.title}
                    />
                  </div>
                  <div className="card__description">
                    <div>
                      <div className="card__price">
                        <span>
                          ${' '}
                          {new Intl.NumberFormat('de-DE').format(
                            item.price.amount,
                          )}
                          <span className="card__cents">
                            {!item.price.decimals ? '00' : item.price.decimals}
                          </span>
                        </span>
                        {item.free_shipping ? (
                          <img
                            className="card__shipping"
                            src={shipping}
                            alt="shipping"
                          />
                        ) : null}
                      </div>

                      <div className="card__title"> {item.title}</div>
                    </div>

                    <div className="card__location">
                      <span>{item.address}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </>
      )}
    </>
  );
};

export default SectionItems;
