import { Injectable } from "@nestjs/common";
import { CreateTestQuestionDto } from "../dto/create-test-question.dto";
import { UpdateTestQuestionDto } from "../dto/update-test-question.dto";

@Injectable()
export class TestQuestionService {
  create(createTestQuestionDto: CreateTestQuestionDto) {
    return "This action adds a new testQuestion";
  }

  findAll() {
    return `This action returns all testQuestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testQuestion`;
  }

  update(id: number, updateTestQuestionDto: UpdateTestQuestionDto) {
    return `This action updates a #${id} testQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} testQuestion`;
  }
}
