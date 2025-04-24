import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSessionCreateBodyComponentsBuyButton
 */
export type CustomerSessionCreateBodyComponentsBuyButton = {
  enabled: boolean;
};

/**
 * @internal
 * CustomerSessionCreateBodyComponentsBuyButton without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBodyComponentsBuyButton = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBodyComponentsBuyButton
 */
const SchemaIn$CustomerSessionCreateBodyComponentsBuyButton: z.ZodType<
  CustomerSessionCreateBodyComponentsBuyButton, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBodyComponentsBuyButton
 */
const SchemaOut$CustomerSessionCreateBodyComponentsBuyButton: z.ZodType<
  External$CustomerSessionCreateBodyComponentsBuyButton, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBodyComponentsBuyButton // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CustomerSessionCreateBodyComponentsBuyButton = {
  in: SchemaIn$CustomerSessionCreateBodyComponentsBuyButton,
  out: SchemaOut$CustomerSessionCreateBodyComponentsBuyButton,
};
