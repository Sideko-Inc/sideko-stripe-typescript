import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
 */
export type FinancialConnectionsTransactionListTransactionRefresh = {
  after: string;
};

/**
 * @internal
 * FinancialConnectionsTransactionListTransactionRefresh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsTransactionListTransactionRefresh = {
  after: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsTransactionListTransactionRefresh
 */
const SchemaIn$FinancialConnectionsTransactionListTransactionRefresh: z.ZodType<
  FinancialConnectionsTransactionListTransactionRefresh, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      after: "after",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsTransactionListTransactionRefresh
 */
const SchemaOut$FinancialConnectionsTransactionListTransactionRefresh: z.ZodType<
  External$FinancialConnectionsTransactionListTransactionRefresh, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsTransactionListTransactionRefresh // the object to be transformed
> = z
  .object({
    after: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      after: "after",
    });
  });

export const Schemas$FinancialConnectionsTransactionListTransactionRefresh = {
  in: SchemaIn$FinancialConnectionsTransactionListTransactionRefresh,
  out: SchemaOut$FinancialConnectionsTransactionListTransactionRefresh,
};
