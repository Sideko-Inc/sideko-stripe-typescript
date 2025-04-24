import {
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
} from "./payment-link-create-body-invoice-creation-invoice-data-custom-fields-arr0-item";
import {
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer,
  Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer,
} from "./payment-link-create-body-invoice-creation-invoice-data-issuer";
import {
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0,
  Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0,
} from "./payment-link-create-body-invoice-creation-invoice-data-metadata-obj0";
import {
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
} from "./payment-link-create-body-invoice-creation-invoice-data-rendering-options-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyInvoiceCreationInvoiceData
 */
export type PaymentLinkCreateBodyInvoiceCreationInvoiceData = {
  accountTaxIds?: (string[] | string) | undefined;
  customFields?:
    | (
        | PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?: PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer | undefined;
  metadata?:
    | (PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0 | string)
    | undefined;
  renderingOptions?:
    | (
        | PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreationInvoiceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreationInvoiceData = {
  account_tax_ids?: (string[] | string) | undefined;
  custom_fields?:
    | (
        | External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?:
    | External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer
    | undefined;
  metadata?:
    | (
        | External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0
        | string
      )
    | undefined;
  rendering_options?:
    | (
        | External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreationInvoiceData
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceData: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    custom_fields: z
      .union([
        z.array(
          Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer.in.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    rendering_options: z
      .union([
        Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreationInvoiceData
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceData: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreationInvoiceData // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    customFields: z
      .union([
        z.array(
          Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataIssuer.out.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    renderingOptions: z
      .union([
        Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.out,
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

export const Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceData = {
  in: SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceData,
  out: SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceData,
};
