// Type definitions for CodeceptJS
// Project: https://github.com/codeception/codeceptjs/
/// <reference path="./types.d.ts" />

// import * as Protractor from "protractor";
//@ts-ignore
import * as index from '../lib/index' // @todo почему-то не хочет работать на проекте

type ValueOf<T> = T[keyof T]
type KeyValueTupleToObject<T extends [keyof any, any]> = {
  [K in T[0]]: Extract<T, [K, any]>[1]
}

declare global {
  const codeceptjs: {
    codecept: typeof Codecept,
    container: typeof Container,
    config: typeof Config,
    actor: any,
    helper: typeof Helper,
    pause: typeof pause,
    within: typeof within,
    dataTable: typeof DataTable,
    locator: typeof Locator,
    
    // export typings from JS files, type any when allowJs is set to false
    recorder: typeof index.recorder,
    event: typeof index.event,
    output: typeof index.output,
    store: typeof index.store,
  }
  
  const codecept_dir: string;
  const codecept_helper: Helper;
  const output_dir: string;

  const locate: typeof Locator.build;
  const secret: typeof Secret.secret;

  const Given: typeof addStep;
  const When: typeof addStep;
  const Then: typeof addStep;

  namespace NodeJS {
    interface Process {
      profile: string;
    }
    
    interface Global {
      codecept_dir: typeof codecept_dir;
      codecept_helper: typeof Helper;
      output_dir: typeof output_dir;

      codeceptjs: typeof codeceptjs;
      Helper: typeof Helper;
      pause: typeof pause;
      within: typeof within;
      session: typeof session;
      DataTable: typeof DataTable;

      locate: typeof locate;
      inject: any;
      secret: typeof secret;      

      Given: typeof Given;
      When: typeof When;
      Then: typeof Then;

      // Used by Protractor helper
      // by: Protractor.ProtractorBy;
      // By: Protractor.ProtractorBy;
      // ExpectedConditions: Protractor.ProtractorExpectedConditions;
      // element: typeof Protractor.element;
      // $: typeof Protractor.$;
      // $$: typeof Protractor.$$;
      // browser: Protractor.ProtractorBrowser;
    }
  }

  namespace Mocha {
    interface MochaGlobals {
      Feature: typeof Feature
    }
  }
}

export = codeceptjs;
