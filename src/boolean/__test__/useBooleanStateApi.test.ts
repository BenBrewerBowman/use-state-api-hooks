import { useBooleanStateApi } from '../useBooleanStateApi';
import { renderHook, act } from '@testing-library/react-hooks';

describe('booleanStateApi', () => {
  test('sets true', () => {
    const { result } = renderHook(() => useBooleanStateApi(false));
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.state).toEqual(true);
  });

  test('sets false', () => {
    const { result } = renderHook(() => useBooleanStateApi(true));
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.state).toEqual(false);
  });

  test('toggles state', () => {
    const { result } = renderHook(() => useBooleanStateApi(false));
    act(() => {
      result.current.toggle();
    });
    expect(result.current.state).toEqual(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.state).toEqual(false);
  });
});
