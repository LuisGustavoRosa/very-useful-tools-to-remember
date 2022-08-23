import { ToolIndexParams } from "./../../Dtos/ToolsDtos";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ToolsService from "App/Services/ToolsService";

export default class ToolsController {
  private toolsService: ToolsService;

  constructor() {
    this.toolsService = new ToolsService();
  }
  public async index({}: HttpContextContract) {
    return this.toolsService.index();
  }
  public async store({ request }: HttpContextContract) {
    const body = request.all();
    console.log(body);
    return this.toolsService.create(request, body);
  }
  public async toolsFilter({ request }: HttpContextContract) {
    const params = request.qs() as ToolIndexParams;
    return await this.toolsService.toolsFilter(params);
  }
  public async destroy({ params }: HttpContextContract) {
    return await this.toolsService.destroy(params.id);
  }
}
