import "../styles/style.css";

function addAnnoucement() {
	
	return (
        <div className="sidebar flex">
			<h1 className="title">Add Annoucement</h1>
            <div className="flex">
                <input type='text' placeholder="Title" className="input annoucement"></input>
                <textarea className="input annoucement" placeholder="Info"></textarea>
                <button className="add btn">
                    ADD
                </button>
            </div>
		</div>
	);
}

export default addAnnoucement;