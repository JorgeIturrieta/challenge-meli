import {AxiosError} from 'axios';
import React from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import ItemDetail from '../components/ItemDetail';
import {ItemDescription} from '../interfaces/item-description.interface';
import {getItem} from '../services/get-item.service';
import NoMatch from './NoMatch';

const Detail = () => {
  let {id} = useParams<'id'>();

  return <>{!id ? <NoMatch /> : <DetailList id={id} />}</>;
};

const DetailList = ({id}: {id: string}) => {
  const {data, error, isLoading} = useQuery<ItemDescription, AxiosError>(
    ['item', {id}],
    () => getItem(id!),
  );

  return (
    <main className="main">
      <BreadCrumb
        categories={data?.category!}
        loading={isLoading}
        error={error}
      />
      <div className="container-items">
        <ItemDetail data={data!} loading={isLoading} error={error} />
      </div>
    </main>
  );
};

export default Detail;
