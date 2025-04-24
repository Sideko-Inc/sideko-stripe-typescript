import {
  ConnectEmbeddedAccountFeaturesClaim,
  External$ConnectEmbeddedAccountFeaturesClaim,
  Schemas$ConnectEmbeddedAccountFeaturesClaim,
} from "./connect-embedded-account-features-claim";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedAccountConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedAccountFeaturesClaim;
};

/**
 * @internal
 * ConnectEmbeddedAccountConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedAccountConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedAccountFeaturesClaim;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedAccountConfigClaim
 */
const SchemaIn$ConnectEmbeddedAccountConfigClaim: z.ZodType<
  ConnectEmbeddedAccountConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedAccountFeaturesClaim.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedAccountConfigClaim
 */
const SchemaOut$ConnectEmbeddedAccountConfigClaim: z.ZodType<
  External$ConnectEmbeddedAccountConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedAccountConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedAccountFeaturesClaim.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedAccountConfigClaim = {
  in: SchemaIn$ConnectEmbeddedAccountConfigClaim,
  out: SchemaOut$ConnectEmbeddedAccountConfigClaim,
};
