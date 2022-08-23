export interface ToolIndexParams {
  tags: string;
  id: number;
  orderField?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
}
