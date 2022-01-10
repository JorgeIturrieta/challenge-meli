import React from 'react';
import {useQuery} from 'react-query';
import {useSearchParams} from 'react-router-dom';
import {searchItems} from '../services/search.service';
import {Items} from '../interfaces/items.interface';
import {AxiosError} from 'axios';
import SectionItems from '../components/Items';
import BreadCrumb from '../components/BreadCrumb';
import NoMatch from './NoMatch';

const Results = () => {
  let [searchParams] = useSearchParams();
  let search = searchParams.get('search');

  return <>{!search ? <NoMatch /> : <ResultsList search={search!} />}</>;
};

export default Results;

const ResultsList = ({search}: {search: string}) => {
  const {data, isLoading, error} = useQuery<Items, AxiosError>(
    ['items', search],
    () => searchItems(search),
  );

  return (
    <main className="main">
      <BreadCrumb
        categories={data?.categories!}
        loading={isLoading}
        error={error}
      />
      <div className="container-items">
        <SectionItems data={data!} loading={isLoading} error={error} />
      </div>
    </main>
  );
};
