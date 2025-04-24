import {
  ConnectEmbeddedFinancialAccountTransactionsFeatures,
  External$ConnectEmbeddedFinancialAccountTransactionsFeatures,
  Schemas$ConnectEmbeddedFinancialAccountTransactionsFeatures,
} from "./connect-embedded-financial-account-transactions-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedFinancialAccountTransactionsConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedFinancialAccountTransactionsFeatures;
};

/**
 * @internal
 * ConnectEmbeddedFinancialAccountTransactionsConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedFinancialAccountTransactionsConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedFinancialAccountTransactionsFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedFinancialAccountTransactionsConfigClaim
 */
const SchemaIn$ConnectEmbeddedFinancialAccountTransactionsConfigClaim: z.ZodType<
  ConnectEmbeddedFinancialAccountTransactionsConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedFinancialAccountTransactionsFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedFinancialAccountTransactionsConfigClaim
 */
const SchemaOut$ConnectEmbeddedFinancialAccountTransactionsConfigClaim: z.ZodType<
  External$ConnectEmbeddedFinancialAccountTransactionsConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedFinancialAccountTransactionsConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedFinancialAccountTransactionsFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedFinancialAccountTransactionsConfigClaim = {
  in: SchemaIn$ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
  out: SchemaOut$ConnectEmbeddedFinancialAccountTransactionsConfigClaim,
};
