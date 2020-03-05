import { useStateApi } from '../useStateApi';

export type AnchorElState = null | HTMLElement;

type Props = {
  state: AnchorElState;
  setState: (anchorEl: AnchorElState) => void;
};

export const anchorElStateApiFactory = ({ state, setState }: Props) => ({
  clearAnchorEl: () => setState(null),
  setAnchorEl: (event: React.MouseEvent<HTMLElement>) => {
    setState(event.currentTarget);
  },

  anchorEl: state
});

export const useAnchorElStateApi = (
  initialValue: AnchorElState
): ReturnType<typeof anchorElStateApiFactory> =>
  useStateApi(anchorElStateApiFactory, initialValue);