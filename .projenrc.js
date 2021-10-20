const { JsiiProject } = require('projen');


const mavenData = {
  javaPackage: 'jar',
  mavenArtifactId: 'jsii-java-module',
  mavenGroupId: 'com.desiby',
  mavenEndpoint: 'https://maven.pkg.github.com/',
  mavenRepositoryUrl: 'https://maven.pkg.github.com/desiby/jsii-maven-module',
  mavenServerId: 'github'
};

const project = new JsiiProject({
  author: 'desiby',
  authorAddress: 'desiby@hotmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-maven-module',
  repositoryUrl: 'https://github.com/desiby/jsii-maven-module.git',
  deps: ['projen'],
  description: "projen jsii module for maven",
  peerDeps: ['projen'],
  // devDeps: [],
  // packageName: undefined,
  // release: undefined,
  dependabot: false, // Disabling because it is a demo project
  mergify: false, // Disabling because it is a demo project
  publishToMaven: mavenData
});

project.synth();
