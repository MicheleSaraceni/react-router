function Card({ item, onRemove }) {

    function deletePost() {
        fetch("http://localhost:3000/posts/" + item.id, { method: "DELETE" })
            .then(() => {
                onRemove(item.id);
            })
            .catch((err) => {
                console.error("Errore durante la cancellazione:", err);
            });
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={"http://localhost:3000/" + item.img} className="card-img-top" alt={item.img} />
                <img src={"http://localhost:3000/" + item.img} className="card-img-top" alt={item.img} />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <button className="btn btn-danger" onClick={deletePost}>X</button>
            </div>
        </div>
    )
}

export default Card;