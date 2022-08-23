import { ToolIndexParams } from "./../Dtos/ToolsDtos";
import Tool from "App/Models/Tool";

export default class ToolsRepository {
  public async findAll() {
    return await Tool.query();
  }
  public async create(request, body) {
    return await Tool.create(body);
  }
  public async toolsFilter(params: ToolIndexParams) {
    const { tags } = params;
    return await Tool.query().orWhere((query) => {
      tags && query.where("tags", "ILIKE", `%${tags}%`);
    });
  }
  public async delete(id) {
    const tool = await Tool.findOrFail(id);
    await tool.delete();
    return {};
  }
}
