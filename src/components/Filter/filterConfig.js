export const defaultFilters = {
  selectedType: "",
  selectedSubType: "",
  selectedCuisine: "",
  selectedArtType: "",
  selectedParkType: "",
  selectedBarType: "",
  selectedPrice: "",
  selectedPriceOption: "",
  selectedPriceAmount: "",
  selectedStars: "",
};

export const options = {
  restaurant: [
    {
      name: "selectedCuisine",
      label: "Choose a type of cuisine",
      options: [
        "italian",
        "french",
        "japanese",
        "chinese",
        "indian",
        "mexican",
        "thai",
        "american",
        "lebanese",
        "moroccan",
      ],
    },
    {
      name: "selectedStars",
      label: "Number of stars",
      options: ["1", "2", "3"],
    },
    {
      name: "selectedPrice",
      label: "Choose an average price",
      options: ["€", "€€", "€€€", "€€€€", "€€€€€"],
    },
  ],
  museum: [
    {
      name: "selectedSubType",
      label: "Choose an art movement",
      options: ["impressionism", "cubism", "surrealism"],
    },
    {
      name: "selectedArtType",
      label: "Choose a type of art",
      options: ["painting", "sculpture", "photography"],
    },
    {
      name: "selectedPriceOption",
      label: "Free or paid",
      options: ["free", "paid"],
    },
  ],
  bar: [
    {
      name: "selectedBarType",
      label: "Type of bar",
      options: ["wine", "cocktail", "pub", "beer", "lounge"],
    },
    {
      name: "selectedPrice",
      label: "Choose an average price",
      options: ["€", "€€", "€€€", "€€€€", "€€€€€"],
    },
  ],
  park: [
    {
      name: "selectedParkType",
      label: "Choose a type of park",
      options: ["floral", "forest", "urban", "national", "botanical garden"],
    },
    {
      name: "selectedPublicPrivate",
      label: "Public or private",
      options: ["public", "private"],
    },
    {
      name: "selectedPriceOption",
      label: "Free or paid",
      options: ["free", "paid"],
    },
  ],
};
