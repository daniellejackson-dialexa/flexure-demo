import { ProvideSingleton, LazyInject } from "flexure";
import { ExampleRepository } from '../repositories';

@ProvideSingleton(ExampleService)
export class ExampleService {
    @LazyInject(ExampleRepository) private exampleRepository!: ExampleRepository;

    public getAsString(): string {
	return this.exampleRepository.getAll().join(' ');
    }
}
