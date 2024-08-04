import PropTypes from "prop-types"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    itemId: PropTypes.number
}

export default function DeleteButton({ itemId, itemName }) {
    const { deleteItem } = useStock()
    const navigate = useNavigate()
    const handleDelete = () => {
        if(confirm(`Tem certeza que deseja escluir ${itemName}?`)) {
            deleteItem(itemId)
            navigate("/items")
        }
    }

  return <button 
  className="button is-danger is-small"
  onClick={handleDelete}
  >Excluir</button>;
}
