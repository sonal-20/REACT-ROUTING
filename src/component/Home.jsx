import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = (props) => {
  console.log("-------------props", props);
  const teamArray = [
    {
      id: 1,
      teamName: "Test Team 1",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 2,
      teamName: "Test Team 2",
      mermber: ["abc", "xyz", "pqr", "er"],
    },

    {
      id: 3,
      teamName: "Test Team 3",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 4,
      teamName: "Test Team 4",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
    {
      id: 5,
      teamName: "Test Team 5",
      mermber: ["abc", "xyz", "pqr", "er"],
    },

    {
      id: 6,
      teamName: "Test Team 6",
      mermber: ["abc", "xyz", "pqr", "er"],
    },
  ];
  return (
    <div>
      <div className="component">
        <h1>Team list</h1>
      </div>
      <div className="teams">
        {teamArray.map((team) => (
          <div key={team.id}>
            <span>
              <Link to={`/details/${team.id}`}>{team.teamName}</Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
