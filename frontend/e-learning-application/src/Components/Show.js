import React from "react";
import "../styles/style.css";
import Box from "./Box";

function Show({users}) {
        return (
        <div className="show">
            {users.map((user) => {
                return (
                    <Box
                    name={user.name}
                    email={user.email}
                    />
                );
                })}       
        </div>
	);
}

export default Show;