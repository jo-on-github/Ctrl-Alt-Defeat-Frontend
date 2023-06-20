// empty array created to store all of our data to pick whatever data we need throughout the app
let listItemData = [];

// function to add data to the empty array
export function setlistItemData(data) {
    listItemData = [];
    // listItemData.push(data);
    listItemData = [...data];
    console.log(listItemData);
}

// function to get data from the array
export function getlistItemData() {
    return listItemData
}

// want to create the correct route from the listItem to the correct guide page
// want to use unique ID to create the correct route

// write a handleClick function so when listItem is clicked it sends fetch request to backend with specific unique ID as a query
// how do we get the unique ID from the listItem
// 