import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItemNumeric
 */
export type CheckoutSessionCreateBodyCustomFieldsItemNumeric = {
  defaultValue?: string | undefined;
  maximumLength?: number | undefined;
  minimumLength?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItemNumeric without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItemNumeric = {
  default_value?: string | undefined;
  maximum_length?: number | undefined;
  minimum_length?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItemNumeric
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemNumeric: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItemNumeric, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItemNumeric
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemNumeric: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItemNumeric, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItemNumeric // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItemNumeric = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemNumeric,
  out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemNumeric,
};
