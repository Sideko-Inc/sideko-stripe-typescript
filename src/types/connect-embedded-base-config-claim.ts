import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedBaseConfigClaim = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: Record<string, any>;
};

/**
 * @internal
 * ConnectEmbeddedBaseConfigClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedBaseConfigClaim = {
  enabled: boolean;
  features: Record<string, any>;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedBaseConfigClaim
 */
const SchemaIn$ConnectEmbeddedBaseConfigClaim: z.ZodType<
  ConnectEmbeddedBaseConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: z.record(z.string(), z.any()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedBaseConfigClaim
 */
const SchemaOut$ConnectEmbeddedBaseConfigClaim: z.ZodType<
  External$ConnectEmbeddedBaseConfigClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedBaseConfigClaim // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: z.record(z.string(), z.any()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedBaseConfigClaim = {
  in: SchemaIn$ConnectEmbeddedBaseConfigClaim,
  out: SchemaOut$ConnectEmbeddedBaseConfigClaim,
};
