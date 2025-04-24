import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
export type PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    name: string;
    value: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item =
  {
    in: SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
    out: SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  };
