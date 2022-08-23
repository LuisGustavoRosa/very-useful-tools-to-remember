import { ToolIndexParams } from "./../Dtos/ToolsDtos";
import ToolsRepository from "App/Repositories/ToolsRepository";

export default class ToolsService {
  private toolsRepository: ToolsRepository;

  constructor() {
    this.toolsRepository = new ToolsRepository();
  }
  public async index() {
    return await this.toolsRepository.findAll();
  }
  public async create(request, body) {
    return await this.toolsRepository.create(request, body);
  }
  public async toolsFilter(params: ToolIndexParams) {
    return await this.toolsRepository.toolsFilter(params);
  }
  public async destroy(toolsId) {
    return await this.toolsRepository.delete(toolsId);
  }
}
