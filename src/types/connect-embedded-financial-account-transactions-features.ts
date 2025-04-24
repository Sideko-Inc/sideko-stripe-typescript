import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedFinancialAccountTransactionsFeatures = {
  /**
   * Whether to allow card spend dispute management features.
   */
  cardSpendDisputeManagement: boolean;
};

/**
 * @internal
 * ConnectEmbeddedFinancialAccountTransactionsFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedFinancialAccountTransactionsFeatures = {
  card_spend_dispute_management: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedFinancialAccountTransactionsFeatures
 */
const SchemaIn$ConnectEmbeddedFinancialAccountTransactionsFeatures: z.ZodType<
  ConnectEmbeddedFinancialAccountTransactionsFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_spend_dispute_management: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_spend_dispute_management: "cardSpendDisputeManagement",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedFinancialAccountTransactionsFeatures
 */
const SchemaOut$ConnectEmbeddedFinancialAccountTransactionsFeatures: z.ZodType<
  External$ConnectEmbeddedFinancialAccountTransactionsFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedFinancialAccountTransactionsFeatures // the object to be transformed
> = z
  .object({
    cardSpendDisputeManagement: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardSpendDisputeManagement: "card_spend_dispute_management",
    });
  });

export const Schemas$ConnectEmbeddedFinancialAccountTransactionsFeatures = {
  in: SchemaIn$ConnectEmbeddedFinancialAccountTransactionsFeatures,
  out: SchemaOut$ConnectEmbeddedFinancialAccountTransactionsFeatures,
};
