import httpCommon from '../http-common';
import {ItemDescription} from '../interfaces/item-description.interface';

export const getItem = async (id: string | null): Promise<ItemDescription> => {
  const resp = await httpCommon.get<ItemDescription>(`items/${id}`);

  return resp.data;
};
