//import * as fs from 'fs-extra'; // eslint-disable-line
import * as path from 'path'; // eslint-disable-line
import { Component, SampleDir, TextFile } from 'projen';
import { JavaProject, JavaProjectOptions } from 'projen/lib/java';
//import { pascalCase } from '../pascalCase';

export interface JavaMicroserviceProjectOptions extends JavaProjectOptions {
  /**
   * Prettier ignore settings
   * @default ['*']
   */
  readonly prettierIgnore?: string[];
}

/**
 * CDK Day Demo Project in TypeScript
 *
 * @pjid cdkday-project
 */
export class JavaMicroserviceProject extends JavaProject {
  public readonly projectName: string;

  constructor(options: JavaMicroserviceProjectOptions) {
    super({
      ...options,
      sample: true,
      // Custom project stuff
      artifactId: "jsii-java-module",
      groupId: "com.idemia.isna.vss.microservice",
      description: "Base Java Serverless Microservice template to be used for Idemia projects"

    });

    this.projectName = path.basename(process.cwd());

    this.addDependency("org.postgresql/postgresql@42.2.20");

    const prettierIgnoreLines = options.prettierIgnore ?? ['*'];
    new TextFile(this, '.prettierignore', {
      lines: prettierIgnoreLines,
    });

    new Sample(this);
    // if (options.sample ?? true) {
    //   new Sample(this);
    // }
  }

}

class Sample extends Component {
  private readonly demoProject: JavaMicroserviceProject;


  constructor(project: JavaMicroserviceProject) {
    super(project);
    this.demoProject = project;
  }

  public synthesize() {
    

    //const projectType = pascalCase(this.demoProject.projectName);

    new SampleDir(this.demoProject, ".", {
      sourceDir: "gitlab_ci.yml"
    });

  }

//   private createMainTsContents(projectName: string, projectType: string): string {
//     return ``;
//   }

}
