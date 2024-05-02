export const filterPlace = (place, filters) => {
  return (
    (!filters.selectedType || place.placeType === filters.selectedType) &&
    (!filters.selectedCuisine ||
      place.cuisineType === filters.selectedCuisine) &&
    (!filters.selectedSubType ||
      place.artMovement === filters.selectedSubType) &&
    (!filters.selectedArtType || place.artType === filters.selectedArtType) &&
    (!filters.selectedParkType ||
      place.parkType === filters.selectedParkType) &&
    (!filters.selectedBarType || place.barType === filters.selectedBarType) &&
    (!filters.selectedPrice || place.averagePrice === filters.selectedPrice) &&
    (filters.selectedPriceOption !== "paid" ||
      place.price === parseInt(filters.selectedPriceAmount)) &&
    (!filters.selectedStars ||
      place.starRating === parseInt(filters.selectedStars)) &&
    (!filters.selectedPublicPrivate ||
      place.publicOrPrivate === filters.selectedPublicPrivate)
  );
};
