import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AddDispatch, RootState } from "./store.ts";

type DispatchFunction = () => AddDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector