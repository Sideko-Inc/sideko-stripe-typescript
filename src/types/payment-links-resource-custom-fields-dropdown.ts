import {
  External$PaymentLinksResourceCustomFieldsDropdownOption,
  PaymentLinksResourceCustomFieldsDropdownOption,
  Schemas$PaymentLinksResourceCustomFieldsDropdownOption,
} from "./payment-links-resource-custom-fields-dropdown-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomFieldsDropdown = {
  /**
   * The value that will pre-fill on the payment page.
   */
  defaultValue?: string | null | undefined;
  /**
   * The options available for the customer to select. Up to 200 options allowed.
   */
  options: PaymentLinksResourceCustomFieldsDropdownOption[];
};

/**
 * @internal
 * PaymentLinksResourceCustomFieldsDropdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomFieldsDropdown = {
  default_value?: string | null | undefined;
  options: External$PaymentLinksResourceCustomFieldsDropdownOption[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomFieldsDropdown
 */
const SchemaIn$PaymentLinksResourceCustomFieldsDropdown: z.ZodType<
  PaymentLinksResourceCustomFieldsDropdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().nullable().optional(),
    options: z.array(Schemas$PaymentLinksResourceCustomFieldsDropdownOption.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_value: "defaultValue",
      options: "options",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomFieldsDropdown
 */
const SchemaOut$PaymentLinksResourceCustomFieldsDropdown: z.ZodType<
  External$PaymentLinksResourceCustomFieldsDropdown, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomFieldsDropdown // the object to be transformed
> = z
  .object({
    defaultValue: z.string().nullable().optional(),
    options: z.array(
      Schemas$PaymentLinksResourceCustomFieldsDropdownOption.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      options: "options",
    });
  });

export const Schemas$PaymentLinksResourceCustomFieldsDropdown = {
  in: SchemaIn$PaymentLinksResourceCustomFieldsDropdown,
  out: SchemaOut$PaymentLinksResourceCustomFieldsDropdown,
};
