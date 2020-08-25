import React, { useState } from "react";
import List from './components/List';
import SearchBar from './pages/Search';

const App = () => {

  const Information = [
    {
      id: 1,
      name: "Samuel",
      age: 74,
      country: "USA"
    },
    {
      id: 2,
      name: "Sam",
      age: 50,
      country: "USA"
    },
    {
      id: 3,
      name: "Mark",
      age: 21,
      country: "Africa"
    },
    {
      id: 4,
      name: "Markus",
      age: 19,
      country: "Africa"
    },
    {
      id: 5,
      name: "Aayush",
      age: 37,
      country: "India"
    },
    {
      id: 6,
      name: "Sean",
      age: 42,
      country: "Ireland"
    },
    {
      id: 7,
      name: "Eduardo",
      age: 89,
      country: "France"
    },
    {
      id: 8,
      name: "Dustin",
      age: 10,
      country: "Spain"
    },
    {
      id: 9,
      name: "Alexendra",
      age: 68,
      country: "USA"
    },
    {
      id: 10,
      name: "Lee",
      age: 56,
      country: "China"
    },
    {
      id: 11,
      name: "Jim",
      age: 48,
      country: "Korea"
    }
  ];



  const [filterState, setFilterState] = useState(Information)

  const [searchTerm, setSearchTerm] = useState()


  //change list of items send list components, create new list of names, NEED a way to have the searchterm trigger send new list to base components 


  function searchDirectory(searchValue) {
    setSearchTerm(searchValue);

    if (searchValue !== "") {

      const result = Information.filter((item) => {
        return (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);

      });

      setFilterState(result)
    } else {

      setFilterState(Information)

    }

  }

  function sortDirectory() {
    setSearchTerm("");

    const result = Information.sort((item1, item2) => {
      if (item1.name > item2.name) {
        return 1
      } else {
        return -1
      }

    });
    console.log(result)
    setFilterState(result)
  }

  // filterstate that then will target one of the array and then have it = to setfilterstate
  return (
    <>
      < SearchBar searchTerm={searchTerm} searchDirectory={searchDirectory} sortDirectory={sortDirectory} />
      <List Information={filterState} />
    </>

  );


}


export default App;