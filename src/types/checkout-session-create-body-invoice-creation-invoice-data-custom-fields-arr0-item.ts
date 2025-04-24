import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
export type CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item // the object to be transformed
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

export const Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
    out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  };
