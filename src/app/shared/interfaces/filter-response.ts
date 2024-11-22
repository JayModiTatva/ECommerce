export interface FilterResponse<T> {
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  data: T;
}
