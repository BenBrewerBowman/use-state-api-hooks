import { useAnchorElStateApi } from '../useAnchorElStateApi';
import { renderHook, act } from '@testing-library/react-hooks';

describe('anchorElStateApi', () => {
  test('clears the anchored element', () => {
    const initialState = { currentTarget: {} } as any;
    const { result } = renderHook(() => useAnchorElStateApi(initialState));
    act(() => {
      result.current.clearAnchorEl();
    });
    expect(result.current.anchorEl).toEqual(null);
  });

  test('sets the anchored element', () => {
    const { result } = renderHook(() => useAnchorElStateApi(null));
    const mockElement = { currentTarget: {} } as any;
    act(() => {
      result.current.setAnchorEl(mockElement);
    });
    expect(result.current.anchorEl).toEqual(mockElement.currentTarget);
  });
});
