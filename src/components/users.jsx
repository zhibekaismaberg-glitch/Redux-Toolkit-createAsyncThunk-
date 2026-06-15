import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store/user-slice"
import { useEffect } from "react"


export function Users() {

    const { users, status } = useSelector(
        (store) => store.users
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "error") {
        return <div>Error</div>
    }

    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>City: {user.address.city}</p>

                        <hr />
                    </div>
                ))
            }
        </div>
    )
}