import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures
 */
export type AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures =
  {
    cardSpendDisputeManagement?: boolean | undefined;
  };

/**
 * @internal
 * AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures =
  {
    card_spend_dispute_management?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_spend_dispute_management: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_spend_dispute_management: "cardSpendDisputeManagement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures // the object to be transformed
> = z
  .object({
    cardSpendDisputeManagement: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardSpendDisputeManagement: "card_spend_dispute_management",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures =
  {
    in: SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures,
    out: SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountTransactionsFeatures,
  };
