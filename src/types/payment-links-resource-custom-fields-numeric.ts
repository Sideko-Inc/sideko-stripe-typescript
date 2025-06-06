import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomFieldsNumeric = {
  /**
   * The value that will pre-fill the field on the payment page.
   */
  defaultValue?: string | null | undefined;
  /**
   * The maximum character length constraint for the customer's input.
   */
  maximumLength?: number | null | undefined;
  /**
   * The minimum character length requirement for the customer's input.
   */
  minimumLength?: number | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourceCustomFieldsNumeric without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomFieldsNumeric = {
  default_value?: string | null | undefined;
  maximum_length?: number | null | undefined;
  minimum_length?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomFieldsNumeric
 */
const SchemaIn$PaymentLinksResourceCustomFieldsNumeric: z.ZodType<
  PaymentLinksResourceCustomFieldsNumeric, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().nullable().optional(),
    maximum_length: z.number().int().nullable().optional(),
    minimum_length: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomFieldsNumeric
 */
const SchemaOut$PaymentLinksResourceCustomFieldsNumeric: z.ZodType<
  External$PaymentLinksResourceCustomFieldsNumeric, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomFieldsNumeric // the object to be transformed
> = z
  .object({
    defaultValue: z.string().nullable().optional(),
    maximumLength: z.number().int().nullable().optional(),
    minimumLength: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      maximumLength: "maximum_length",
      minimumLength: "minimum_length",
    });
  });

export const Schemas$PaymentLinksResourceCustomFieldsNumeric = {
  in: SchemaIn$PaymentLinksResourceCustomFieldsNumeric,
  out: SchemaOut$PaymentLinksResourceCustomFieldsNumeric,
};
