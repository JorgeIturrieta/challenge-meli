import httpCommon from '../http-common';
import {Items} from '../interfaces/items.interface';

export const searchItems = async (q: string | null): Promise<Items> => {
  const resp = await httpCommon.get<Items>(`items/?q=${q}`);
  return resp.data;
};
