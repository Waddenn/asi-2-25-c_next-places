const formOptions = {
  restaurant: [
    {
      name: "cuisineType",
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
      name: "starRating",
      label: "Number of stars",
      options: [1, 2, 3],
    },
    {
      name: "averagePrice",
      label: "Choose an average price",
      options: ["€", "€€", "€€€", "€€€€", "€€€€€"],
    },
  ],
  museum: [
    {
      name: "artMovement",
      label: "Choose an art movement",
      options: ["impressionism", "cubism", "surrealism"],
    },
    {
      name: "artType",
      label: "Choose a type of art",
      options: ["painting", "sculpture", "photography"],
    },
    {
      name: "freeOrPaid",
      label: "Free or paid",
      options: ["free", "paid"],
    },
  ],
  bar: [
    {
      name: "barType",
      label: "Type of bar",
      options: ["wine", "cocktail", "pub", "beer", "lounge"],
    },
    {
      name: "averagePrice",
      label: "Choose an average price",
      options: ["€", "€€", "€€€", "€€€€", "€€€€€"],
    },
  ],
  park: [
    {
      name: "parkType",
      label: "Choose a type of park",
      options: ["floral", "forest", "urban", "national", "botanical garden"],
    },
    {
      name: "publicOrPrivate",
      label: "Public or private",
      options: ["public", "private"],
    },
    {
      name: "freeOrPaid",
      label: "Free or paid",
      options: ["free", "paid"],
    },
  ],
};

export default formOptions;
