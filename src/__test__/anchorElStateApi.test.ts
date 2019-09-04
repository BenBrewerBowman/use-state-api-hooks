import createTestApi from './createTestApi';
import { anchorElStateApiFactory, AnchorElState } from '../useAnchorElStateApi';

const testUseAnchorElStateApi = (initialState: AnchorElState) =>
  createTestApi(anchorElStateApiFactory, initialState);

describe('anchorElStateApi', () => {
  test('clears the anchored element', () => {
    const anchorElState = testUseAnchorElStateApi({ currentTarget: {} } as any);
    anchorElState.api.clearAnchorEl();
    expect(anchorElState.api.anchorEl).toEqual(null);
  });

  test('sets the anchored element', () => {
    const mockElement = { currentTarget: {} } as any;
    const anchorElState = testUseAnchorElStateApi(null);
    anchorElState.api.setAnchorEl(mockElement);
    expect(anchorElState.api.anchorEl).toEqual(mockElement.currentTarget);
  });
});
