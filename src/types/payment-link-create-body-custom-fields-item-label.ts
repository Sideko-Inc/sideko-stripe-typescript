import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomFieldsItemLabel
 */
export type PaymentLinkCreateBodyCustomFieldsItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomFieldsItemLabel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomFieldsItemLabel = {
  custom: string;
  type: "custom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomFieldsItemLabel
 */
const SchemaIn$PaymentLinkCreateBodyCustomFieldsItemLabel: z.ZodType<
  PaymentLinkCreateBodyCustomFieldsItemLabel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomFieldsItemLabel
 */
const SchemaOut$PaymentLinkCreateBodyCustomFieldsItemLabel: z.ZodType<
  External$PaymentLinkCreateBodyCustomFieldsItemLabel, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomFieldsItemLabel // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyCustomFieldsItemLabel = {
  in: SchemaIn$PaymentLinkCreateBodyCustomFieldsItemLabel,
  out: SchemaOut$PaymentLinkCreateBodyCustomFieldsItemLabel,
};
