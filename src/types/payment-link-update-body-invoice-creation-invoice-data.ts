import {
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
} from "./payment-link-update-body-invoice-creation-invoice-data-custom-fields-arr0-item";
import {
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer,
  Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer,
} from "./payment-link-update-body-invoice-creation-invoice-data-issuer";
import {
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0,
  Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0,
} from "./payment-link-update-body-invoice-creation-invoice-data-metadata-obj0";
import {
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
} from "./payment-link-update-body-invoice-creation-invoice-data-rendering-options-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceData
 */
export type PaymentLinkUpdateBodyInvoiceCreationInvoiceData = {
  accountTaxIds?: (string[] | string) | undefined;
  customFields?:
    | (
        | PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?: PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer | undefined;
  metadata?:
    | (PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0 | string)
    | undefined;
  renderingOptions?:
    | (
        | PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreationInvoiceData = {
  account_tax_ids?: (string[] | string) | undefined;
  custom_fields?:
    | (
        | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?:
    | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer
    | undefined;
  metadata?:
    | (
        | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0
        | string
      )
    | undefined;
  rendering_options?:
    | (
        | External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreationInvoiceData
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceData: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    custom_fields: z
      .union([
        z.array(
          Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer.in.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    rendering_options: z
      .union([
        Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      custom_fields: "customFields",
      description: "description",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      rendering_options: "renderingOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreationInvoiceData
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceData: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceData // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    customFields: z
      .union([
        z.array(
          Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataIssuer.out.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    renderingOptions: z
      .union([
        Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      customFields: "custom_fields",
      description: "description",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      renderingOptions: "rendering_options",
    });
  });

export const Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceData = {
  in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceData,
  out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceData,
};
