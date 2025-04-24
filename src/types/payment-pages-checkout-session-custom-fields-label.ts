import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomFieldsLabel = {
  /**
   * Custom text for the label, displayed to the customer. Up to 50 characters.
   */
  custom?: string | null | undefined;
  /**
   * The type of the label.
   */
  type: "custom";
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomFieldsLabel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomFieldsLabel = {
  custom?: string | null | undefined;
  type: "custom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomFieldsLabel
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomFieldsLabel: z.ZodType<
  PaymentPagesCheckoutSessionCustomFieldsLabel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomFieldsLabel
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomFieldsLabel: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomFieldsLabel, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomFieldsLabel // the object to be transformed
> = z
  .object({
    custom: z.string().nullable().optional(),
    type: z.enum(["custom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom: "custom",
      type: "type",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomFieldsLabel = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomFieldsLabel,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomFieldsLabel,
};
