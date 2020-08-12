[![Serverless Components](https://s3.amazonaws.com/public.assets.serverless.com/images/readme_serverless_express.gif)](http://serverless.com)

<br/>

**Serverless Express** ⎯⎯⎯ This [Serverless Framework Component](https://github.com/serverless/components) enables you to take existing Express.js apps and easily deploy them onto cheap, auto-scaling, serverless infrastructure on the Cloud. It's packed with production-ready features, like custom domains, SSL certificates, and canary deployments.

This tutorial was made to be as cloud agnostic as possible. For example, we show how main cloud providers like Amazon Web Services (AWS) Cloud and Tencent Cloud can be used with Serverless.
<br/>
Get Started:

1. [**Install**](#1-install)
2. [**Initialize**](#2-initialize)
3. [**Deploy**](#3-deploy)
4. [**Configure**](#4-configure)
5. [**Monitor**](#5-monitor)
6. [**Remove**](#6-remove)

&nbsp;

### Install
To get started with this component, install the latest version of the Serverless Framework:

```
$ npm install -g serverless
```

### Initialize
Now you can either go to your existing Express.js app, or create a new one by using the `serverless init` command.

**1. Creating a new Express.js app**

The following commands will download the `express-starter` template.

```
$ serverless init express-starter
$ cd express-starter
```

This will also run `npm install` for you, and create an empty `.env` file. Open that `.env` file and can add in your Cloud credentials.

For AWS Cloud users, enter your AWS key credentials. You can create a new AWS account or get a new access key [here]([https://aws.amazon.com/console/](https://aws.amazon.com/console/)).
```
# .env
AWS_ACCESS_KEY_ID=XXX
AWS_SECRET_ACCESS_KEY=XXX
```

For Tencent Cloud users, enter your Tencent Cloud key credentials created from the [API key management]([https://console.cloud.tencent.com/cam/capi](https://console.cloud.tencent.com/cam/capi)). If you do not have a Tencent Cloud account, you can register a new account [here]([https://cloud.tencent.com/register](https://cloud.tencent.com/register))
```
# .env
SERVERLESS_PLATFORM_VENDOR=tencent
TENCENT_SECRET_ID=1234
TENCENT_SECRET_KEY=4321
```
If you are using Tencent Cloud, you will also need to rename `app.js` to `sls.js`. That file is a basic Express.js file with basic routing examples.

You should now have a directory that looks something like this:

```
|- app.js / sls.js
|- node_modules
|- package.json
|- serverless.yml
|- .env
```
**2. Using an existing Express.js app**

If you are using an existing Express.js app, you will need to create the `serverless.yml` file and `.env` file in the same directory that contains your Express.js file. You will also need to rename your Express.js file to `app.js` or `sls.js`.

### Deploy

Once you have the directory set up, you're now ready to deploy. Just run `serverless deploy` from within the directory containing the `serverless.yml` file. Your first deployment might take a little while, but subsequent deployment would just take few seconds. After deployment is done, you should see your express app's URL. Visit that URL to see your new app live.

**Note:** If you see an `internal server error`, it probably means you did not run `npm install`, or that your Express.js file does not have the appropriate name (See above for more info).

For more information on what's going on during deployment, you could specify the `serverless deploy --debug` flag, which would view deployment logs in realtime.
<br/>

### Configure

The Express component is a zero configuration component, meaning that it'll work out of the box with no configuration and sane defaults. With that said, there are still a lot of optional configuration that you can specify.

Here's a complete reference of the `serverless.yml` file for the express component using AWS Cloud:

```yml
component: express               # (required) name of the component. In that case, it's express.  You will want to pin this to a specific version in production via semantic versioning, like this: express@1.0.10.  Run 'serverless registry express' to see available versions.
name: express-api                # (required) name of your express component instance.
org: serverlessinc               # (optional) serverless dashboard org. default is the first org you created during signup.
app: myApp                       # (optional) serverless dashboard app. default is the same as the name property.
stage: dev                       # (optional) serverless dashboard stage. default is dev.

inputs:
  src: ./                        # (optional) path to the source folder. default is a hello world app.
  memory: 512                    # (optional) lambda memory size.
  timeout: 10                    # (optional) lambda timeout.
  description: My Express App    # (optional) lambda & api gateway description.
  env:                           # (optional) env vars.
    DEBUG: 'express:*'           #            this express specific env var will print express debug logs.
  roleName: my-custom-role-name  # (optional) custom AWS IAM Role name for setting custom permissions.
  traffic: 0.2                   # (optional) traffic percentage to apply to this deployment.
  layers:                        # (optional) list of lambda layer arns to attach to your lambda function.
    - arn:aws:first:layer
    - arn:aws:second:layer
  domain: api.serverless.com     # (optional) if the domain was registered via AWS Route53 on the account you are deploying to, it will automatically be set-up with your Express app's API Gateway, as well as a free AWS ACM SSL Cert.
  region: us-east-2              # (optional) aws region to deploy to. default is us-east-1.
  openApi: true                  # (optional) (experimental) Initialize the express app on each deployment, extract an OpenAPI V.3 specification, and add it to the outputs.
```

For Tencent Cloud users, the full configuration for the `serverless.yml` is as below:
```
component: express # (required) name of the component. In that case, it's express.
name: expressDemo # (required) name of your express component instance.
org: orgDemo # (optional) serverless dashboard org. default is the first org you created during signup.
app: appDemo # (optional) serverless dashboard app. default is the same as the name property.
stage: dev # (optional) serverless dashboard stage. default is dev.

inputs:
  src: ./ # (optional) path to the source folder. default is a hello world app.
  functionName: expressDemo
  region: ap-guangzhou
  runtime: Nodejs10.15
  exclude:
    - .env
  apigatewayConf:
    protocols:
      - http
      - https
    environment: release
```

Once you've chosen your configuration, run `serverless deploy` again (or simply just `serverless`) to deploy your changes.

### Monitor

Anytime you need to know more about your running express instance, you can run `serverless info` to view the most critical info. This is especially helpful when you want to know the outputs of your instances so that you can reference them in another instance. You will also see a url where you'll be able to view more info about your instance on the Serverless Dashboard.

It also shows you the status of your instance, when it was last deployed, and how many times it was deployed. To dig even deeper, you can pass the `--debug` flag to view the state of your component instance in case the deployment failed for any reason.


### Remove

If you want tear down your entire express infrastructure that was created during deployment, just run `serverless remove` in the directory containing the `serverless.yml` file. The express component will then use all the data it needs from the built-in state storage system to delete only the relavent cloud resources that it created.

Just like deployment, you could also specify a `--debug` flag for realtime logs from the express component running in the cloud.
