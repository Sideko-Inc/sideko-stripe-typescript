import {
  ConnectEmbeddedPaymentsFeatures,
  External$ConnectEmbeddedPaymentsFeatures,
  Schemas$ConnectEmbeddedPaymentsFeatures,
} from "./connect-embedded-payments-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedPaymentsConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedPaymentsFeatures;
};

/**
 * @internal
 * ConnectEmbeddedPaymentsConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedPaymentsConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedPaymentsFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedPaymentsConfigClaim
 */
const SchemaIn$ConnectEmbeddedPaymentsConfigClaim: z.ZodType<
  ConnectEmbeddedPaymentsConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedPaymentsFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedPaymentsConfigClaim
 */
const SchemaOut$ConnectEmbeddedPaymentsConfigClaim: z.ZodType<
  External$ConnectEmbeddedPaymentsConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedPaymentsConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedPaymentsFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedPaymentsConfigClaim = {
  in: SchemaIn$ConnectEmbeddedPaymentsConfigClaim,
  out: SchemaOut$ConnectEmbeddedPaymentsConfigClaim,
};
