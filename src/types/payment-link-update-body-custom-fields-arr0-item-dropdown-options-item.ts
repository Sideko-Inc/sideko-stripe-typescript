import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem
 */
export type PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem = {
  label: string;
  value: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem =
  {
    label: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem
 */
const SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem: z.ZodType<
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    label: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      label: "label",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem
 */
const SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem: z.ZodType<
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem // the object to be transformed
> = z
  .object({
    label: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      label: "label",
      value: "value",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem =
  {
    in: SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem,
    out: SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem,
  };
