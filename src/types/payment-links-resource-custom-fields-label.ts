import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomFieldsLabel = {
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
 * PaymentLinksResourceCustomFieldsLabel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomFieldsLabel = {
  custom?: string | null | undefined;
  type: "custom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomFieldsLabel
 */
const SchemaIn$PaymentLinksResourceCustomFieldsLabel: z.ZodType<
  PaymentLinksResourceCustomFieldsLabel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomFieldsLabel
 */
const SchemaOut$PaymentLinksResourceCustomFieldsLabel: z.ZodType<
  External$PaymentLinksResourceCustomFieldsLabel, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomFieldsLabel // the object to be transformed
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

export const Schemas$PaymentLinksResourceCustomFieldsLabel = {
  in: SchemaIn$PaymentLinksResourceCustomFieldsLabel,
  out: SchemaOut$PaymentLinksResourceCustomFieldsLabel,
};
