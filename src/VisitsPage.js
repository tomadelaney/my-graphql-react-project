import React from "react";
//import { useQuery, gql } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
    query users {
        users{
            id
            userPref {
                currentSemester
                theme
            }
        }
    }    
`;

function VisitorsPage() {
    const {data, loading, error} = useQuery(GET_USER);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="col">
            <h1>React Componant - Users</h1>
            <p>These are all of my users, y&apos;all!</p>
            {data.users.map(user => <div>{user.id} => {user.userPref.currentSemester} => {user.userPref.theme}</div>)}
        </div>
    );

}
export default VisitorsPage;
