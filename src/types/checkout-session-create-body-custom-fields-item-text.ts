import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItemText
 */
export type CheckoutSessionCreateBodyCustomFieldsItemText = {
  defaultValue?: string | undefined;
  maximumLength?: number | undefined;
  minimumLength?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItemText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItemText = {
  default_value?: string | undefined;
  maximum_length?: number | undefined;
  minimum_length?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItemText
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemText: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItemText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().optional(),
    maximum_length: z.number().int().optional(),
    minimum_length: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_value: "defaultValue",
      maximum_length: "maximumLength",
      minimum_length: "minimumLength",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItemText
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemText: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItemText, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItemText // the object to be transformed
> = z
  .object({
    defaultValue: z.string().optional(),
    maximumLength: z.number().int().optional(),
    minimumLength: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      maximumLength: "maximum_length",
      minimumLength: "minimum_length",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItemText = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemText,
  out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemText,
};
