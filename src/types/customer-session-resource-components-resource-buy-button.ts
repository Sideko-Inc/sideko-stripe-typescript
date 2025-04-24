import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains whether the buy button is enabled.
 */
export type CustomerSessionResourceComponentsResourceBuyButton = {
  /**
   * Whether the buy button is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * CustomerSessionResourceComponentsResourceBuyButton without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionResourceComponentsResourceBuyButton = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionResourceComponentsResourceBuyButton
 */
const SchemaIn$CustomerSessionResourceComponentsResourceBuyButton: z.ZodType<
  CustomerSessionResourceComponentsResourceBuyButton, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionResourceComponentsResourceBuyButton
 */
const SchemaOut$CustomerSessionResourceComponentsResourceBuyButton: z.ZodType<
  External$CustomerSessionResourceComponentsResourceBuyButton, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionResourceComponentsResourceBuyButton // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CustomerSessionResourceComponentsResourceBuyButton = {
  in: SchemaIn$CustomerSessionResourceComponentsResourceBuyButton,
  out: SchemaOut$CustomerSessionResourceComponentsResourceBuyButton,
};
