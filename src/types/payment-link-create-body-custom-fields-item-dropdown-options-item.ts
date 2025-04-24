import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem
 */
export type PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem = {
  label: string;
  value: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem =
  {
    label: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem
 */
const SchemaIn$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem: z.ZodType<
  PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem
 */
const SchemaOut$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem: z.ZodType<
  External$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem =
  {
    in: SchemaIn$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem,
    out: SchemaOut$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem,
  };
