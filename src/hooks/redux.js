import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

/// HOC (Higher Over Component) - React.memo
/// useMemo
/// useCallback


export const useActionCreators = ( actions ) => {
    const dispatch = useDispatch()

    return useMemo(
        () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
)
}