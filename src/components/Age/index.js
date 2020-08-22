import React from "react";

function SearchResults(edits) {
    // Using the filter method, we can create a new array containing only groceries which haven't been purchased
    const ageDifference = edits.names.filter(foodName => !foodName.age);

    return (
        <table className="table table-striped">
            <tbody>
                {ageDifference.map(item => (
                    <tr>
                        <td key={item.id}>
                            {item.firstName}
                            {"\n"}
                            {item.lastName}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SearchResults;