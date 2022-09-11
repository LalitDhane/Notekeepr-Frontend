import Deleteicon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons//Edit";
export default function Note(props) {
  return (
    <div className="note">
      <button
        onClick={() => {
          props.onedit(props.id);
        }}
      >
        <EditIcon />
      </button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.ondelete(props.id);
        }}
      >
        <Deleteicon />
      </button>
    </div>
  );
}
