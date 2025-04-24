import {
  AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures,
  External$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures,
  Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures,
} from "./account-sessions-create-body-components-financial-account-transactions-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsFinancialAccountTransactions
 */
export type AccountSessionsCreateBodyComponentsFinancialAccountTransactions = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsFinancialAccountTransactions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsFinancialAccountTransactions =
  {
    enabled: boolean;
    features?:
      | External$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsFinancialAccountTransactions
 */
const SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountTransactions: z.ZodType<
  AccountSessionsCreateBodyComponentsFinancialAccountTransactions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsFinancialAccountTransactions
 */
const SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountTransactions: z.ZodType<
  External$AccountSessionsCreateBodyComponentsFinancialAccountTransactions, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsFinancialAccountTransactions // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactions =
  {
    in: SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountTransactions,
    out: SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountTransactions,
  };
