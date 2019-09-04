import useStateApi from './useStateApi';

export type AnchorElState = null | HTMLElement;

type Props = {
  state: AnchorElState;
  setState: (anchorEl: AnchorElState) => void;
};

const anchorElStateApiFactory = ({ state, setState }: Props) => {
  return {
    clearAnchorEl: () => setState(null),
    setAnchorEl: (event: React.MouseEvent<HTMLElement>) => {
      setState(event.currentTarget);
    },

    anchorEl: state
  };
};

export { anchorElStateApiFactory };

const useAnchorElStateApi = (
  initialValue: AnchorElState
): ReturnType<typeof anchorElStateApiFactory> =>
  useStateApi(anchorElStateApiFactory, initialValue);
export default useAnchorElStateApi;
