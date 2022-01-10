import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../views/Main';
// import Results from '../views/Results';
// import Detail from '../views/Detail';
import NoMatch from '../views/NoMatch';
const Results = React.lazy(() => import('../views/Results'));
const Detail = React.lazy(() => import('../views/Detail'));

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            path="items"
            element={
              <React.Suspense fallback={<></>}>
                <Results />
              </React.Suspense>
            }
          />
          <Route
            path="/items/:id"
            element={
              <React.Suspense fallback={<></>}>
                <Detail />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route path="items" element={<Results />} />
          <Route path="/items/:id" element={<Detail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
    </>
  );
};
// 386KB vs 406kB
export default AppRouter;
