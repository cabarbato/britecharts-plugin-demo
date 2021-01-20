export const
  setCategory = (payload: string) => ({ type: 'SET_CATEGORY', payload }),
  getCategories = (payload: object[]) => ({ type: 'GET_CATEGORIES', payload });