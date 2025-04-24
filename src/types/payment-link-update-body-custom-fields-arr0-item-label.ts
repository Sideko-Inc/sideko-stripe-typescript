import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel
 */
export type PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel
 */
const SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel: z.ZodType<
  PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel
 */
const SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel: z.ZodType<
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel,
  out: SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel,
};
