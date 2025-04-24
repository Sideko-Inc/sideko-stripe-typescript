import {
  External$PaymentLinkCreateBodyCustomFieldsItemDropdown,
  PaymentLinkCreateBodyCustomFieldsItemDropdown,
  Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdown,
} from "./payment-link-create-body-custom-fields-item-dropdown";
import {
  External$PaymentLinkCreateBodyCustomFieldsItemLabel,
  PaymentLinkCreateBodyCustomFieldsItemLabel,
  Schemas$PaymentLinkCreateBodyCustomFieldsItemLabel,
} from "./payment-link-create-body-custom-fields-item-label";
import {
  External$PaymentLinkCreateBodyCustomFieldsItemNumeric,
  PaymentLinkCreateBodyCustomFieldsItemNumeric,
  Schemas$PaymentLinkCreateBodyCustomFieldsItemNumeric,
} from "./payment-link-create-body-custom-fields-item-numeric";
import {
  External$PaymentLinkCreateBodyCustomFieldsItemText,
  PaymentLinkCreateBodyCustomFieldsItemText,
  Schemas$PaymentLinkCreateBodyCustomFieldsItemText,
} from "./payment-link-create-body-custom-fields-item-text";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomFieldsItem
 */
export type PaymentLinkCreateBodyCustomFieldsItem = {
  dropdown?: PaymentLinkCreateBodyCustomFieldsItemDropdown | undefined;
  key: string;
  label: PaymentLinkCreateBodyCustomFieldsItemLabel;
  numeric?: PaymentLinkCreateBodyCustomFieldsItemNumeric | undefined;
  optional?: boolean | undefined;
  text?: PaymentLinkCreateBodyCustomFieldsItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomFieldsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomFieldsItem = {
  dropdown?: External$PaymentLinkCreateBodyCustomFieldsItemDropdown | undefined;
  key: string;
  label: External$PaymentLinkCreateBodyCustomFieldsItemLabel;
  numeric?: External$PaymentLinkCreateBodyCustomFieldsItemNumeric | undefined;
  optional?: boolean | undefined;
  text?: External$PaymentLinkCreateBodyCustomFieldsItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomFieldsItem
 */
const SchemaIn$PaymentLinkCreateBodyCustomFieldsItem: z.ZodType<
  PaymentLinkCreateBodyCustomFieldsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dropdown:
      Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdown.in.optional(),
    key: z.string(),
    label: Schemas$PaymentLinkCreateBodyCustomFieldsItemLabel.in,
    numeric: Schemas$PaymentLinkCreateBodyCustomFieldsItemNumeric.in.optional(),
    optional: z.boolean().optional(),
    text: Schemas$PaymentLinkCreateBodyCustomFieldsItemText.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomFieldsItem
 */
const SchemaOut$PaymentLinkCreateBodyCustomFieldsItem: z.ZodType<
  External$PaymentLinkCreateBodyCustomFieldsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomFieldsItem // the object to be transformed
> = z
  .object({
    dropdown:
      Schemas$PaymentLinkCreateBodyCustomFieldsItemDropdown.out.optional(),
    key: z.string(),
    label: Schemas$PaymentLinkCreateBodyCustomFieldsItemLabel.out,
    numeric:
      Schemas$PaymentLinkCreateBodyCustomFieldsItemNumeric.out.optional(),
    optional: z.boolean().optional(),
    text: Schemas$PaymentLinkCreateBodyCustomFieldsItemText.out.optional(),
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

export const Schemas$PaymentLinkCreateBodyCustomFieldsItem = {
  in: SchemaIn$PaymentLinkCreateBodyCustomFieldsItem,
  out: SchemaOut$PaymentLinkCreateBodyCustomFieldsItem,
};
