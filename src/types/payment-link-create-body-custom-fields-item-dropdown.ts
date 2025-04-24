import {
  External$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem,
  PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem,
  Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem,
} from "./payment-link-create-body-custom-fields-item-dropdown-options-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomFieldsItemDropdown
 */
export type PaymentLinkCreateBodyCustomFieldsItemDropdown = {
  defaultValue?: string | undefined;
  options: PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem[];
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomFieldsItemDropdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomFieldsItemDropdown = {
  default_value?: string | undefined;
  options: External$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomFieldsItemDropdown
 */
const SchemaIn$PaymentLinkCreateBodyCustomFieldsItemDropdown: z.ZodType<
  PaymentLinkCreateBodyCustomFieldsItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().optional(),
    options: z.array(
      Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomFieldsItemDropdown
 */
const SchemaOut$PaymentLinkCreateBodyCustomFieldsItemDropdown: z.ZodType<
  External$PaymentLinkCreateBodyCustomFieldsItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomFieldsItemDropdown // the object to be transformed
> = z
  .object({
    defaultValue: z.string().optional(),
    options: z.array(
      Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdownOptionsItem.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      options: "options",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdown = {
  in: SchemaIn$PaymentLinkCreateBodyCustomFieldsItemDropdown,
  out: SchemaOut$PaymentLinkCreateBodyCustomFieldsItemDropdown,
};
