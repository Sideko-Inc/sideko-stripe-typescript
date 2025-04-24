import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItemLabel
 */
export type CheckoutSessionCreateBodyCustomFieldsItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItemLabel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItemLabel
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemLabel: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItemLabel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom: z.string(),
    type: z.enum(["custom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom: "custom",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItemLabel
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemLabel: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItemLabel, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItemLabel // the object to be transformed
> = z
  .object({
    custom: z.string(),
    type: z.enum(["custom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom: "custom",
      type: "type",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItemLabel = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemLabel,
  out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemLabel,
};
