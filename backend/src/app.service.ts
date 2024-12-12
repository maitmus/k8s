import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkHealth() {
    return { result: 'Hello K8s!' };
  }
}
