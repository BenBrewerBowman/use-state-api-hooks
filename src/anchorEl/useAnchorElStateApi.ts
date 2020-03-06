import { useStateApi } from '../useStateApi';
import { Dispatch, SetStateAction } from 'react';

export type AnchorElState = null | HTMLElement;

export const anchorElStateApiFactory = (setState: Dispatch<SetStateAction<AnchorElState>>) => ({
  clearAnchorEl: () => setState(null),
  setAnchorEl: (event: React.MouseEvent<HTMLElement>) => {
    setState(event.currentTarget);
  }
});

export const useAnchorElStateApi = (
  initialValue: AnchorElState
) => {
  const { state: anchorEl, setState, ...args } = useStateApi<ReturnType<typeof anchorElStateApiFactory>, AnchorElState>(anchorElStateApiFactory, initialValue);
  return({
    anchorEl,
    ...args
  })
};