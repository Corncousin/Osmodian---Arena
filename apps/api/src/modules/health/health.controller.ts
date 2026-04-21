import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOkResponse({
    description: 'Simple health endpoint for the Arena API.',
    schema: {
      example: {
        status: 'ok',
        service: 'api',
      },
    },
  })
  getHealth(): { status: 'ok'; service: 'api' } {
    return {
      status: 'ok',
      service: 'api',
    };
  }
}
