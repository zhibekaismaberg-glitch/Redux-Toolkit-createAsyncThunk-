import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/post-slice'
import { useEffect } from 'react'

export function Posts() {
    const { data, status } = useSelector((store) => store.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    if (status === 'loading') {
        return <div>LOADING..</div>
    }

    if (status === "error") {
        return <div>Error </div>
    }


    return (
        <ul>
            {data?.map(item => (
                <li key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.body}</p>

                </li>
            ))}
        </ul>
    )

}