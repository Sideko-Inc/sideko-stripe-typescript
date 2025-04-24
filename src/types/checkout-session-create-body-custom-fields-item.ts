import {
  CheckoutSessionCreateBodyCustomFieldsItemDropdown,
  External$CheckoutSessionCreateBodyCustomFieldsItemDropdown,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdown,
} from "./checkout-session-create-body-custom-fields-item-dropdown";
import {
  CheckoutSessionCreateBodyCustomFieldsItemLabel,
  External$CheckoutSessionCreateBodyCustomFieldsItemLabel,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItemLabel,
} from "./checkout-session-create-body-custom-fields-item-label";
import {
  CheckoutSessionCreateBodyCustomFieldsItemNumeric,
  External$CheckoutSessionCreateBodyCustomFieldsItemNumeric,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItemNumeric,
} from "./checkout-session-create-body-custom-fields-item-numeric";
import {
  CheckoutSessionCreateBodyCustomFieldsItemText,
  External$CheckoutSessionCreateBodyCustomFieldsItemText,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItemText,
} from "./checkout-session-create-body-custom-fields-item-text";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomFieldsItem
 */
export type CheckoutSessionCreateBodyCustomFieldsItem = {
  dropdown?: CheckoutSessionCreateBodyCustomFieldsItemDropdown | undefined;
  key: string;
  label: CheckoutSessionCreateBodyCustomFieldsItemLabel;
  numeric?: CheckoutSessionCreateBodyCustomFieldsItemNumeric | undefined;
  optional?: boolean | undefined;
  text?: CheckoutSessionCreateBodyCustomFieldsItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomFieldsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomFieldsItem = {
  dropdown?:
    | External$CheckoutSessionCreateBodyCustomFieldsItemDropdown
    | undefined;
  key: string;
  label: External$CheckoutSessionCreateBodyCustomFieldsItemLabel;
  numeric?:
    | External$CheckoutSessionCreateBodyCustomFieldsItemNumeric
    | undefined;
  optional?: boolean | undefined;
  text?: External$CheckoutSessionCreateBodyCustomFieldsItemText | undefined;
  type: "dropdown" | "numeric" | "text";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomFieldsItem
 */
const SchemaIn$CheckoutSessionCreateBodyCustomFieldsItem: z.ZodType<
  CheckoutSessionCreateBodyCustomFieldsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dropdown:
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdown.in.optional(),
    key: z.string(),
    label: Schemas$CheckoutSessionCreateBodyCustomFieldsItemLabel.in,
    numeric:
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemNumeric.in.optional(),
    optional: z.boolean().optional(),
    text: Schemas$CheckoutSessionCreateBodyCustomFieldsItemText.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomFieldsItem
 */
const SchemaOut$CheckoutSessionCreateBodyCustomFieldsItem: z.ZodType<
  External$CheckoutSessionCreateBodyCustomFieldsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomFieldsItem // the object to be transformed
> = z
  .object({
    dropdown:
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemDropdown.out.optional(),
    key: z.string(),
    label: Schemas$CheckoutSessionCreateBodyCustomFieldsItemLabel.out,
    numeric:
      Schemas$CheckoutSessionCreateBodyCustomFieldsItemNumeric.out.optional(),
    optional: z.boolean().optional(),
    text: Schemas$CheckoutSessionCreateBodyCustomFieldsItemText.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyCustomFieldsItem = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomFieldsItem,
  out: SchemaOut$CheckoutSessionCreateBodyCustomFieldsItem,
};
