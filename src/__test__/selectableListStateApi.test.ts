import selectableListApi from '../useSelectableListStateApi';
import * as arrayStateApi from '../useArrayStateApi';
describe('selectableListStateApi', () => {
  test('adds the value to the array if it does not exist in the array', () => {
    const mockPush = jest.fn();
    jest
      .spyOn(arrayStateApi, 'default')
      .mockReturnValue({ push: mockPush, value: [] } as any);
    const selectableList = selectableListApi<number>([]);
    selectableList.toggleValueInclusion(1);
    expect(mockPush).toHaveBeenCalledWith(1);
  });
  test('removes the value if it already exists in the array', () => {
    const mockDeleteAt = jest.fn();
    jest
      .spyOn(arrayStateApi, 'default')
      .mockReturnValue({ deleteAt: mockDeleteAt, value: [0, 2, 1] } as any);
    const selectableList = selectableListApi<number>([0, 2, 1]);
    selectableList.toggleValueInclusion(1);
    expect(mockDeleteAt).toHaveBeenCalledWith(2);
  });
});
