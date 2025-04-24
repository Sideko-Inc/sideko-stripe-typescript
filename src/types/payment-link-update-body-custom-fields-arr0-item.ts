import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown,
} from "./payment-link-update-body-custom-fields-arr0-item-dropdown";
import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel,
} from "./payment-link-update-body-custom-fields-arr0-item-label";
import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric,
} from "./payment-link-update-body-custom-fields-arr0-item-numeric";
import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0ItemText,
  PaymentLinkUpdateBodyCustomFieldsArr0ItemText,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemText,
} from "./payment-link-update-body-custom-fields-arr0-item-text";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomFieldsArr0Item
 */
export type PaymentLinkUpdateBodyCustomFieldsArr0Item = {
  dropdown?: PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown | undefined;
  key: string;
  label: PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel;
  numeric?: PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric | undefined;
  optional?: boolean | undefined;
  text?: PaymentLinkUpdateBodyCustomFieldsArr0ItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomFieldsArr0Item = {
  dropdown?:
    | External$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown
    | undefined;
  key: string;
  label: External$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel;
  numeric?:
    | External$PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric
    | undefined;
  optional?: boolean | undefined;
  text?: External$PaymentLinkUpdateBodyCustomFieldsArr0ItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomFieldsArr0Item
 */
const SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0Item: z.ZodType<
  PaymentLinkUpdateBodyCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dropdown:
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown.in.optional(),
    key: z.string(),
    label: Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel.in,
    numeric:
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric.in.optional(),
    optional: z.boolean().optional(),
    text: Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemText.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomFieldsArr0Item
 */
const SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0Item: z.ZodType<
  External$PaymentLinkUpdateBodyCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomFieldsArr0Item // the object to be transformed
> = z
  .object({
    dropdown:
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemDropdown.out.optional(),
    key: z.string(),
    label: Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemLabel.out,
    numeric:
      Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemNumeric.out.optional(),
    optional: z.boolean().optional(),
    text: Schemas$PaymentLinkUpdateBodyCustomFieldsArr0ItemText.out.optional(),
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

export const Schemas$PaymentLinkUpdateBodyCustomFieldsArr0Item = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomFieldsArr0Item,
  out: SchemaOut$PaymentLinkUpdateBodyCustomFieldsArr0Item,
};
