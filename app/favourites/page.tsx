import React from "react";
import EmptyState from "../components/EmptyState";
import getFavouriteListings from "../actions/getFavouriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0)
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listings"
      />
    );

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default FavouritesPage;
