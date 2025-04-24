import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemText
 */
export type PaymentLinkUpdateBodyCustomFieldsArr0ItemText = {
  defaultValue?: string | undefined;
  maximumLength?: number | undefined;
  minimumLength?: number | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomFieldsArr0ItemText = {
  default_value?: string | undefined;
  maximum_length?: number | undefined;
  minimum_length?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomFieldsArr0ItemText
 */
const SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemText: z.ZodType<
  PaymentLinkUpdateBodyCustomFieldsArr0ItemText, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomFieldsArr0ItemText
 */
const SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemText: z.ZodType<
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemText, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemText // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemText = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemText,
  out: SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemText,
};
