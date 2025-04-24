import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem
 */
export type CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem = {
  label: string;
  value: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem =
  {
    label: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem =
  {
    in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem,
    out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem,
  };
