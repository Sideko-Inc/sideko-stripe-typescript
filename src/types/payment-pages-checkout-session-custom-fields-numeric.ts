import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomFieldsNumeric = {
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
  /**
   * The value entered by the customer, containing only digits.
   */
  value?: string | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomFieldsNumeric without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomFieldsNumeric = {
  default_value?: string | null | undefined;
  maximum_length?: number | null | undefined;
  minimum_length?: number | null | undefined;
  value?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomFieldsNumeric
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomFieldsNumeric: z.ZodType<
  PaymentPagesCheckoutSessionCustomFieldsNumeric, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().nullable().optional(),
    maximum_length: z.number().int().nullable().optional(),
    minimum_length: z.number().int().nullable().optional(),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_value: "defaultValue",
      maximum_length: "maximumLength",
      minimum_length: "minimumLength",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomFieldsNumeric
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomFieldsNumeric: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomFieldsNumeric, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomFieldsNumeric // the object to be transformed
> = z
  .object({
    defaultValue: z.string().nullable().optional(),
    maximumLength: z.number().int().nullable().optional(),
    minimumLength: z.number().int().nullable().optional(),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      maximumLength: "maximum_length",
      minimumLength: "minimum_length",
      value: "value",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomFieldsNumeric = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomFieldsNumeric,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomFieldsNumeric,
};
