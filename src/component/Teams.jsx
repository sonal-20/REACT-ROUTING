// import  { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import classNames from "classnames";
// import CustomModal from "./Modal";

// const Teams = (props) => {
//   const teamArray = [
//     {
//       id: 1,
//       teamName: "Test Team 1",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },
//     {
//       id: 2,
//       teamName: "Test Team 2",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },

//     {
//       id: 3,
//       teamName: "Test Team 3",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },
//     {
//       id: 4,
//       teamName: "Test Team 4",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },
//     {
//       id: 5,
//       teamName: "Test Team 5",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },

//     {
//       id: 6,
//       teamName: "Test Team 6",
//       mermber: ["abc", "xyz", "pqr", "er"],
//     },
//   ];
//   const [show, setShow] = useState(false);
//   const [teamDeatils, setTeamDeatils] = useState({});
//   return (
//     <div>
//       <CustomModal
//         show={show}
//         teamName={teamDeatils?.teamName}
//         handleClose={() => setShow(false)}
//         handleAction={() => setShow(false)}
//       />
//       <div className="component">
//         <h1>Team list</h1>
//       </div>
//       <div className="teams">
//         {teamArray.map((team) => (
//           <div key={team.id} className="mb-3">
//             <span>
//               <Link to={`/details/${team.id}`}>{team.teamName}</Link>
//             </span>
//             <Button
//               variant="primary"
//               className={classNames("ml-2")}
//               onClick={() => {
//                 setTeamDeatils(team);
//                 setShow(!show);
//               }}
//             >
//               Delete
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teams;

import Table from 'react-bootstrap/Table';
// import './teams.css'
function Teams() {
  return (

    <div className="container mt-5 table-container">
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Member</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>member1 , member2</td>
          <td><button>Edit</button> <button>Delete</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Harry</td>
          <td>member3</td>
          <td><button>Edit</button> <button>Delete</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>member4</td>
          <td><button>Edit</button> <button>Delete</button></td>
        </tr>
      </tbody>
    </Table>
  

    </div>
  );
}



export default Teams;
