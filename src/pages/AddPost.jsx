import GetData from "../component/GetData";
import AddCard from "../component/AddCard";

export default function AddPost() {
    function onAdd() {
        GetData();
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <AddCard onAdd={onAdd} />
        </div>
    )
}