import {
  ConnectEmbeddedFinancialAccountFeatures,
  External$ConnectEmbeddedFinancialAccountFeatures,
  Schemas$ConnectEmbeddedFinancialAccountFeatures,
} from "./connect-embedded-financial-account-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedFinancialAccountConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedFinancialAccountFeatures;
};

/**
 * @internal
 * ConnectEmbeddedFinancialAccountConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedFinancialAccountConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedFinancialAccountFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedFinancialAccountConfigClaim
 */
const SchemaIn$ConnectEmbeddedFinancialAccountConfigClaim: z.ZodType<
  ConnectEmbeddedFinancialAccountConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedFinancialAccountFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedFinancialAccountConfigClaim
 */
const SchemaOut$ConnectEmbeddedFinancialAccountConfigClaim: z.ZodType<
  External$ConnectEmbeddedFinancialAccountConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedFinancialAccountConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedFinancialAccountFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedFinancialAccountConfigClaim = {
  in: SchemaIn$ConnectEmbeddedFinancialAccountConfigClaim,
  out: SchemaOut$ConnectEmbeddedFinancialAccountConfigClaim,
};
