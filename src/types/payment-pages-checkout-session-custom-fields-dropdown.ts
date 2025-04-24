import {
  External$PaymentPagesCheckoutSessionCustomFieldsOption,
  PaymentPagesCheckoutSessionCustomFieldsOption,
  Schemas$PaymentPagesCheckoutSessionCustomFieldsOption,
} from "./payment-pages-checkout-session-custom-fields-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomFieldsDropdown = {
  /**
   * The value that will pre-fill on the payment page.
   */
  defaultValue?: string | null | undefined;
  /**
   * The options available for the customer to select. Up to 200 options allowed.
   */
  options: PaymentPagesCheckoutSessionCustomFieldsOption[];
  /**
   * The option selected by the customer. This will be the `value` for the option.
   */
  value?: string | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomFieldsDropdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomFieldsDropdown = {
  default_value?: string | null | undefined;
  options: External$PaymentPagesCheckoutSessionCustomFieldsOption[];
  value?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomFieldsDropdown
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomFieldsDropdown: z.ZodType<
  PaymentPagesCheckoutSessionCustomFieldsDropdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_value: z.string().nullable().optional(),
    options: z.array(Schemas$PaymentPagesCheckoutSessionCustomFieldsOption.in),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_value: "defaultValue",
      options: "options",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomFieldsDropdown
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomFieldsDropdown: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomFieldsDropdown, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomFieldsDropdown // the object to be transformed
> = z
  .object({
    defaultValue: z.string().nullable().optional(),
    options: z.array(Schemas$PaymentPagesCheckoutSessionCustomFieldsOption.out),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultValue: "default_value",
      options: "options",
      value: "value",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomFieldsDropdown = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomFieldsDropdown,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomFieldsDropdown,
};
