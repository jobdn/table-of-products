import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../redux";

export const useAppDispatch: () => AppDispath = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
