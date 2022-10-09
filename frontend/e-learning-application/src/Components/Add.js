import "../styles/style.css";

function add({title}) {
	
	return (
        <div className="sidebar flex">
			<h1 className="title">Add {title}</h1>
            <div className="flex">
                <input type='text' placeholder="Name" className="input"></input>
                <input type='text' placeholder="Email" className="input"></input>
                <select className="input">
                    <option value="">Major</option>   
                    <option value='1'>Buisness</option>
                    <option value='2'>Engineering</option>
                    <option value='3'>Pharmacy</option>
                </select>
                <button className="add">
                    ADD
                </button>
            </div>
		</div>
	);
}

export default add;