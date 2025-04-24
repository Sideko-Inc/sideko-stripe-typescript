import {
  ConnectEmbeddedPayoutsFeatures,
  External$ConnectEmbeddedPayoutsFeatures,
  Schemas$ConnectEmbeddedPayoutsFeatures,
} from "./connect-embedded-payouts-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedPayoutsConfig = {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  features: ConnectEmbeddedPayoutsFeatures;
};

/**
 * @internal
 * ConnectEmbeddedPayoutsConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedPayoutsConfig = {
  enabled: boolean;
  features: External$ConnectEmbeddedPayoutsFeatures;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedPayoutsConfig
 */
const SchemaIn$ConnectEmbeddedPayoutsConfig: z.ZodType<
  ConnectEmbeddedPayoutsConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedPayoutsFeatures.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedPayoutsConfig
 */
const SchemaOut$ConnectEmbeddedPayoutsConfig: z.ZodType<
  External$ConnectEmbeddedPayoutsConfig, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedPayoutsConfig // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features: Schemas$ConnectEmbeddedPayoutsFeatures.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$ConnectEmbeddedPayoutsConfig = {
  in: SchemaIn$ConnectEmbeddedPayoutsConfig,
  out: SchemaOut$ConnectEmbeddedPayoutsConfig,
};
