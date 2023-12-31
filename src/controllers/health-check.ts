import { Controller, Route, Get } from "tsoa";
import { ProvideSingleton } from "flexure";

@Route("health-check")
@ProvideSingleton(HealthCheckController)
export class HealthCheckController extends Controller {
    @Get()
    public async healthCheck(): Promise<string> {
	return "OK";
    }
}
