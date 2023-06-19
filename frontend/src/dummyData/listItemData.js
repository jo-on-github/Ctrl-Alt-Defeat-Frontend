const listItemData = [
    {
        title: "Best Burgers In Town",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "Top 10 Pizza Places",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "Best Wings In Town",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "Authentic Mexican Food",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "My Favourite Sushi Places",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "The Kebab That Will Change Your Life",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "Korma Heaven",
        imageURL: "",
        activityType: "Food",
    },
    {
        title: "Italian Food Done Right",
        imageURL: "",
        activityType: "Food",
    },
];

export default listItemData;


//The Plan
//Add a new drop-down list component on click of filter button
  //add filter button back in ✅
  //create handleclick function so when clicked renders drop-down list
    //inside handleclick update clicked state to be true 
  //create a conditional render so when clicked is set to true drop-down list component is rendered

//Click on filter item (e.g. activity-type = food&drink)
  //sub-title activity-type
  //list of filter options (ability to select multiple)
    //food&drink
    //entertainment
    //exercise
//once filter item selected, re-render grid with filtered list
  //handleclick function that is called when checkbox is clicked (checked === true)
    //inside handle click function map over array of objects to search for matches where
    //filter condition is a match (activity-type="food&drink")
    //return filtered array
    //set currentFilter state to be the filtered array
  //pass filtered array to map function within grid so that only newly filtered list is rendered.
    //create a state called currentFilter which stores value of currently filtered array
    //pass that state to the map function which renders the grid
//once filter de-selected, re-render grid with unfiltered list
