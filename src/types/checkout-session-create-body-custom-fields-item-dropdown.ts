import {
  CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem,
  External$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem,
} from "./checkout-session-create-body-custom-fields-item-dropdown-options-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItemDropdown
 */
export type CheckoutSessionCreateBodyCustomFieldsItemDropdown = {
  defaultValue?: string | undefined;
  options: CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem[];
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItemDropdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItemDropdown = {
  default_value?: string | undefined;
  options: External$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItemDropdown
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemDropdown: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().optional(),
    options: z.array(
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_value: "defaultValue",
      options: "options",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItemDropdown
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemDropdown: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItemDropdown // the object to be transformed
> = z
  .object({
    defaultValue: z.string().optional(),
    options: z.array(
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdownOptionsItem.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      options: "options",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdown = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItemDropdown,
  out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItemDropdown,
};
