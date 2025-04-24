import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomFieldsDropdownOption = {
  /**
   * The label for the option, displayed to the customer. Up to 100 characters.
   */
  label: string;
  /**
   * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
   */
  value: string;
};

/**
 * @internal
 * PaymentLinksResourceCustomFieldsDropdownOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomFieldsDropdownOption = {
  label: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomFieldsDropdownOption
 */
const SchemaIn$PaymentLinksResourceCustomFieldsDropdownOption: z.ZodType<
  PaymentLinksResourceCustomFieldsDropdownOption, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomFieldsDropdownOption
 */
const SchemaOut$PaymentLinksResourceCustomFieldsDropdownOption: z.ZodType<
  External$PaymentLinksResourceCustomFieldsDropdownOption, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomFieldsDropdownOption // the object to be transformed
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

export const Schemas$PaymentLinksResourceCustomFieldsDropdownOption = {
  in: SchemaIn$PaymentLinksResourceCustomFieldsDropdownOption,
  out: SchemaOut$PaymentLinksResourceCustomFieldsDropdownOption,
};
