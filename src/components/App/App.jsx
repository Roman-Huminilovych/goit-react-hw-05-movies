import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "components/Loader/Loader";
import MainNavigation from "../MainNavigation/MainNavigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const App = () => {
  return (
    <div>
      <MainNavigation />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailsPage></MovieDetailsPage>
          </Route>

          <Route path="/movies">
            <MoviesPage></MoviesPage>
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
