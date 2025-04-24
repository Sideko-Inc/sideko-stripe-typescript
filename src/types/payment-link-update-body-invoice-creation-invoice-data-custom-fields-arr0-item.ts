import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
export type PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
    out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  };
