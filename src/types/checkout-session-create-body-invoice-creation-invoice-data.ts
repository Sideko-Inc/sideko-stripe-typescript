import {
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
  Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item,
} from "./checkout-session-create-body-invoice-creation-invoice-data-custom-fields-arr0-item";
import {
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer,
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer,
  Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer,
} from "./checkout-session-create-body-invoice-creation-invoice-data-issuer";
import {
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata,
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata,
  Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata,
} from "./checkout-session-create-body-invoice-creation-invoice-data-metadata";
import {
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
} from "./checkout-session-create-body-invoice-creation-invoice-data-rendering-options-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceData
 */
export type CheckoutSessionCreateBodyInvoiceCreationInvoiceData = {
  accountTaxIds?: (string[] | string) | undefined;
  customFields?:
    | (
        | CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?:
    | CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer
    | undefined;
  metadata?:
    | CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
    | undefined;
  renderingOptions?:
    | (
        | CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreationInvoiceData = {
  account_tax_ids?: (string[] | string) | undefined;
  custom_fields?:
    | (
        | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  description?: string | undefined;
  footer?: string | undefined;
  issuer?:
    | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer
    | undefined;
  metadata?:
    | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata
    | undefined;
  rendering_options?:
    | (
        | External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreationInvoiceData
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceData: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    custom_fields: z
      .union([
        z.array(
          Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer.in.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata.in.optional(),
    rendering_options: z
      .union([
        Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreationInvoiceData
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceData: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreationInvoiceData // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    customFields: z
      .union([
        z.array(
          Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataCustomFieldsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    description: z.string().optional(),
    footer: z.string().optional(),
    issuer:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataIssuer.out.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataMetadata.out.optional(),
    renderingOptions: z
      .union([
        Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0.out,
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

export const Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceData = {
  in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceData,
  out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceData,
};
