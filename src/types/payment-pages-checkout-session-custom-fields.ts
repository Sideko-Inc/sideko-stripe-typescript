import {
  External$PaymentPagesCheckoutSessionCustomFieldsDropdown,
  PaymentPagesCheckoutSessionCustomFieldsDropdown,
  Schemas$PaymentPagesCheckoutSessionCustomFieldsDropdown,
} from "./payment-pages-checkout-session-custom-fields-dropdown";
import {
  External$PaymentPagesCheckoutSessionCustomFieldsLabel,
  PaymentPagesCheckoutSessionCustomFieldsLabel,
  Schemas$PaymentPagesCheckoutSessionCustomFieldsLabel,
} from "./payment-pages-checkout-session-custom-fields-label";
import {
  External$PaymentPagesCheckoutSessionCustomFieldsNumeric,
  PaymentPagesCheckoutSessionCustomFieldsNumeric,
  Schemas$PaymentPagesCheckoutSessionCustomFieldsNumeric,
} from "./payment-pages-checkout-session-custom-fields-numeric";
import {
  External$PaymentPagesCheckoutSessionCustomFieldsText,
  PaymentPagesCheckoutSessionCustomFieldsText,
  Schemas$PaymentPagesCheckoutSessionCustomFieldsText,
} from "./payment-pages-checkout-session-custom-fields-text";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomFields = {
  dropdown?: PaymentPagesCheckoutSessionCustomFieldsDropdown | undefined;
  /**
   * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
   */
  key: string;
  label: PaymentPagesCheckoutSessionCustomFieldsLabel;
  numeric?: PaymentPagesCheckoutSessionCustomFieldsNumeric | undefined;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
  text?: PaymentPagesCheckoutSessionCustomFieldsText | undefined;
  /**
   * The type of the field.
   */
  type: "dropdown" | "numeric" | "text";
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomFields without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomFields = {
  dropdown?:
    | External$PaymentPagesCheckoutSessionCustomFieldsDropdown
    | undefined;
  key: string;
  label: External$PaymentPagesCheckoutSessionCustomFieldsLabel;
  numeric?: External$PaymentPagesCheckoutSessionCustomFieldsNumeric | undefined;
  optional: boolean;
  text?: External$PaymentPagesCheckoutSessionCustomFieldsText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomFields
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomFields: z.ZodType<
  PaymentPagesCheckoutSessionCustomFields, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dropdown:
      Schemas$PaymentPagesCheckoutSessionCustomFieldsDropdown.in.optional(),
    key: z.string(),
    label: Schemas$PaymentPagesCheckoutSessionCustomFieldsLabel.in,
    numeric:
      Schemas$PaymentPagesCheckoutSessionCustomFieldsNumeric.in.optional(),
    optional: z.boolean(),
    text: Schemas$PaymentPagesCheckoutSessionCustomFieldsText.in.optional(),
    type: z.enum(["dropdown", "numeric", "text"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dropdown: "dropdown",
      key: "key",
      label: "label",
      numeric: "numeric",
      optional: "optional",
      text: "text",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomFields
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomFields: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomFields, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomFields // the object to be transformed
> = z
  .object({
    dropdown:
      Schemas$PaymentPagesCheckoutSessionCustomFieldsDropdown.out.optional(),
    key: z.string(),
    label: Schemas$PaymentPagesCheckoutSessionCustomFieldsLabel.out,
    numeric:
      Schemas$PaymentPagesCheckoutSessionCustomFieldsNumeric.out.optional(),
    optional: z.boolean(),
    text: Schemas$PaymentPagesCheckoutSessionCustomFieldsText.out.optional(),
    type: z.enum(["dropdown", "numeric", "text"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dropdown: "dropdown",
      key: "key",
      label: "label",
      numeric: "numeric",
      optional: "optional",
      text: "text",
      type: "type",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomFields = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomFields,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomFields,
};
