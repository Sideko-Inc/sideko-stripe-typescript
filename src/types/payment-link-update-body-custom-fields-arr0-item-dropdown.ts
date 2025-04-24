import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem,
} from "./payment-link-update-body-custom-fields-arr0-item-dropdown-options-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown
 */
export type PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown = {
  defaultValue?: string | undefined;
  options: PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem[];
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown = {
  default_value?: string | undefined;
  options: External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown
 */
const SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown: z.ZodType<
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().optional(),
    options: z.array(
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown
 */
const SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown: z.ZodType<
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown // the object to be transformed
> = z
  .object({
    defaultValue: z.string().optional(),
    options: z.array(
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdownOptionsItem.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      options: "options",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown,
  out: SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown,
};
