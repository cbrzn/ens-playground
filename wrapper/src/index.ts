import { 
  Args_sampleMethod,
  SampleResult,
  Another_Module
} from "./wrap";
import { Args_anotherMethod } from "./wrap/imported/Another_Module/serialization";

export function sampleMethod(args: Args_sampleMethod): SampleResult {
  const anotherMethodArgs: Args_anotherMethod = {
    arg: args.arg
  };
  const someString = Another_Module.anotherMethod(anotherMethodArgs).unwrap();
  return {
    result: someString
  }
}
