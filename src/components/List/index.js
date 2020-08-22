import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) { // why does this have props answer// is it because the names is not in this document
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased


  return (
    <table className="table table-striped">
      <tbody>
        {props.Information.map(item => (
          <tr key={item.id}>
            <td >
              {item.name}
            </td>
            <td>
              {item.age}
            </td>
            <td>
              {item.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


//plans to sort array

export default List;
