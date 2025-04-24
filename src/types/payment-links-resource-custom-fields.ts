import {
  External$PaymentLinksResourceCustomFieldsDropdown,
  PaymentLinksResourceCustomFieldsDropdown,
  Schemas$PaymentLinksResourceCustomFieldsDropdown,
} from "./payment-links-resource-custom-fields-dropdown";
import {
  External$PaymentLinksResourceCustomFieldsLabel,
  PaymentLinksResourceCustomFieldsLabel,
  Schemas$PaymentLinksResourceCustomFieldsLabel,
} from "./payment-links-resource-custom-fields-label";
import {
  External$PaymentLinksResourceCustomFieldsNumeric,
  PaymentLinksResourceCustomFieldsNumeric,
  Schemas$PaymentLinksResourceCustomFieldsNumeric,
} from "./payment-links-resource-custom-fields-numeric";
import {
  External$PaymentLinksResourceCustomFieldsText,
  PaymentLinksResourceCustomFieldsText,
  Schemas$PaymentLinksResourceCustomFieldsText,
} from "./payment-links-resource-custom-fields-text";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomFields = {
  dropdown?: PaymentLinksResourceCustomFieldsDropdown | undefined;
  /**
   * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
   */
  key: string;
  label: PaymentLinksResourceCustomFieldsLabel;
  numeric?: PaymentLinksResourceCustomFieldsNumeric | undefined;
  /**
   * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
   */
  optional: boolean;
  text?: PaymentLinksResourceCustomFieldsText | undefined;
  /**
   * The type of the field.
   */
  type: "dropdown" | "numeric" | "text";
};

/**
 * @internal
 * PaymentLinksResourceCustomFields without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomFields = {
  dropdown?: External$PaymentLinksResourceCustomFieldsDropdown | undefined;
  key: string;
  label: External$PaymentLinksResourceCustomFieldsLabel;
  numeric?: External$PaymentLinksResourceCustomFieldsNumeric | undefined;
  optional: boolean;
  text?: External$PaymentLinksResourceCustomFieldsText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomFields
 */
const SchemaIn$PaymentLinksResourceCustomFields: z.ZodType<
  PaymentLinksResourceCustomFields, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dropdown: Schemas$PaymentLinksResourceCustomFieldsDropdown.in.optional(),
    key: z.string(),
    label: Schemas$PaymentLinksResourceCustomFieldsLabel.in,
    numeric: Schemas$PaymentLinksResourceCustomFieldsNumeric.in.optional(),
    optional: z.boolean(),
    text: Schemas$PaymentLinksResourceCustomFieldsText.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomFields
 */
const SchemaOut$PaymentLinksResourceCustomFields: z.ZodType<
  External$PaymentLinksResourceCustomFields, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomFields // the object to be transformed
> = z
  .object({
    dropdown: Schemas$PaymentLinksResourceCustomFieldsDropdown.out.optional(),
    key: z.string(),
    label: Schemas$PaymentLinksResourceCustomFieldsLabel.out,
    numeric: Schemas$PaymentLinksResourceCustomFieldsNumeric.out.optional(),
    optional: z.boolean(),
    text: Schemas$PaymentLinksResourceCustomFieldsText.out.optional(),
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

export const Schemas$PaymentLinksResourceCustomFields = {
  in: SchemaIn$PaymentLinksResourceCustomFields,
  out: SchemaOut$PaymentLinksResourceCustomFields,
};
