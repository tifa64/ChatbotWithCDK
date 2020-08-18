# Welcome to your CDK TypeScript project!

* Created and deployed two CloudFormation Stacks: one that is used internally by CDK and another one for the project itself.
* Created VPC with 2 subnets.
* Implemented a lambda function inside the VPC to call [ELIZA](https://en.wikipedia.org/wiki/ELIZA).
* Constructed API Gateway that allows HTTP requests into the VPC.

Project's architecture ![Image](https://intro-to-cdk.workshop.aws/images/what-you-will-build/architecture-final.png)

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
