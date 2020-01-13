import * as defaultOperations from "./operations";
import {
  Query,
  Options,
  createQueryTester,
  EqualsOperation,
  createEqualsOperation
} from "./core";

const createDefaultQueryTester = (
  query: Query,
  { compare, operations }: Partial<Options> = {}
) => {
  return createQueryTester(query, {
    compare: compare,
    operations: Object.assign({}, defaultOperations, operations || {})
  });
};

export { Query, EqualsOperation, createQueryTester, createEqualsOperation };

export default createDefaultQueryTester;
