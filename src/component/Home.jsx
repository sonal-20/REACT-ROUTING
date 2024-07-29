import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classNames from "classnames";
import CustomModal from "./Modal";

const Home = (props) => {
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
  const [show, setShow] = useState(false);
  const [teamDeatils, setTeamDeatils] = useState({});
  return (
    <div>
      <CustomModal
        show={show}
        teamName={teamDeatils?.teamName}
        handleClose={() => setShow(false)}
        handleAction={() => setShow(false)}
      />
      <div className="component">
        <h1>Team list</h1>
      </div>
      <div className="teams">
        {teamArray.map((team) => (
          <div key={team.id} className="mb-3">
            <span>
              <Link to={`/details/${team.id}`}>{team.teamName}</Link>
            </span>
            <Button
              variant="primary"
              className={classNames("ml-2")}
              onClick={() => {
                setTeamDeatils(team);
                setShow(!show);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
