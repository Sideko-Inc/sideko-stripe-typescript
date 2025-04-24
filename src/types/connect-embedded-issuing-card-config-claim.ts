import {
  ConnectEmbeddedIssuingCardFeatures,
  External$ConnectEmbeddedIssuingCardFeatures,
  Schemas$ConnectEmbeddedIssuingCardFeatures,
} from "./connect-embedded-issuing-card-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedIssuingCardConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedIssuingCardFeatures;
};

/**
 * @internal
 * ConnectEmbeddedIssuingCardConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedIssuingCardConfigClaim = {
  enabled: boolean;
  features: External$ConnectEmbeddedIssuingCardFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedIssuingCardConfigClaim
 */
const SchemaIn$ConnectEmbeddedIssuingCardConfigClaim: z.ZodType<
  ConnectEmbeddedIssuingCardConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedIssuingCardFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedIssuingCardConfigClaim
 */
const SchemaOut$ConnectEmbeddedIssuingCardConfigClaim: z.ZodType<
  External$ConnectEmbeddedIssuingCardConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedIssuingCardConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedIssuingCardFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedIssuingCardConfigClaim = {
  in: SchemaIn$ConnectEmbeddedIssuingCardConfigClaim,
  out: SchemaOut$ConnectEmbeddedIssuingCardConfigClaim,
};
