const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'desiby',
  authorAddress: 'desiby@hotmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-maven-module',
  repositoryUrl: 'https://github.com/desiby/jsii-maven-module.git',
  deps: ['projen'],
  description: 'projen jsii module for maven to be reused in java projects',
  peerDeps: ['projen'],
  devDeps: [
    'fs-extra',
    '@types/fs-extra@^8',
  ],
  packageName: '@desiby/projen-java-demo',
  // release: undefined,
  dependabot: false, // Disabling because it is a demo project
  mergify: false, // Disabling because it is a demo project

  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
});
project.synth();
