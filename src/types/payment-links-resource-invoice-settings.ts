import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import {
  DeletedTaxId,
  External$DeletedTaxId,
  Schemas$DeletedTaxId,
} from "./deleted-tax-id";
import {
  External$InvoiceSettingCheckoutRenderingOptions,
  InvoiceSettingCheckoutRenderingOptions,
  Schemas$InvoiceSettingCheckoutRenderingOptions,
} from "./invoice-setting-checkout-rendering-options";
import {
  External$InvoiceSettingCustomField,
  InvoiceSettingCustomField,
  Schemas$InvoiceSettingCustomField,
} from "./invoice-setting-custom-field";
import {
  External$PaymentLinksResourceInvoiceSettingsMetadata,
  PaymentLinksResourceInvoiceSettingsMetadata,
  Schemas$PaymentLinksResourceInvoiceSettingsMetadata,
} from "./payment-links-resource-invoice-settings-metadata";
import { External$TaxId, Schemas$TaxId, TaxId } from "./tax-id";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceInvoiceSettings = {
  /**
   * The account tax IDs associated with the invoice.
   */
  accountTaxIds?: (string | TaxId | DeletedTaxId)[] | null | undefined;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice.
   */
  customFields?: InvoiceSettingCustomField[] | null | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string | null | undefined;
  issuer?: ConnectAccountReference | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PaymentLinksResourceInvoiceSettingsMetadata | null | undefined;
  renderingOptions?: InvoiceSettingCheckoutRenderingOptions | undefined;
};

/**
 * @internal
 * PaymentLinksResourceInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceInvoiceSettings = {
  account_tax_ids?:
    | (string | External$TaxId | External$DeletedTaxId)[]
    | null
    | undefined;
  custom_fields?: External$InvoiceSettingCustomField[] | null | undefined;
  description?: string | null | undefined;
  footer?: string | null | undefined;
  issuer?: External$ConnectAccountReference | undefined;
  metadata?:
    | External$PaymentLinksResourceInvoiceSettingsMetadata
    | null
    | undefined;
  rendering_options?:
    | External$InvoiceSettingCheckoutRenderingOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceInvoiceSettings
 */
const SchemaIn$PaymentLinksResourceInvoiceSettings: z.ZodType<
  PaymentLinksResourceInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z
      .array(
        z.union([
          z.string(),
          z.lazy(() => Schemas$TaxId.in),
          Schemas$DeletedTaxId.in,
        ]),
      )
      .nullable()
      .optional(),
    custom_fields: z
      .array(Schemas$InvoiceSettingCustomField.in)
      .nullable()
      .optional(),
    description: z.string().nullable().optional(),
    footer: z.string().nullable().optional(),
    issuer: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
    metadata: Schemas$PaymentLinksResourceInvoiceSettingsMetadata.in
      .nullable()
      .optional(),
    rendering_options:
      Schemas$InvoiceSettingCheckoutRenderingOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceInvoiceSettings
 */
const SchemaOut$PaymentLinksResourceInvoiceSettings: z.ZodType<
  External$PaymentLinksResourceInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z
      .array(
        z.union([
          z.string(),
          z.lazy(() => Schemas$TaxId.out),
          Schemas$DeletedTaxId.out,
        ]),
      )
      .nullable()
      .optional(),
    customFields: z
      .array(Schemas$InvoiceSettingCustomField.out)
      .nullable()
      .optional(),
    description: z.string().nullable().optional(),
    footer: z.string().nullable().optional(),
    issuer: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
    metadata: Schemas$PaymentLinksResourceInvoiceSettingsMetadata.out
      .nullable()
      .optional(),
    renderingOptions:
      Schemas$InvoiceSettingCheckoutRenderingOptions.out.optional(),
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

export const Schemas$PaymentLinksResourceInvoiceSettings = {
  in: SchemaIn$PaymentLinksResourceInvoiceSettings,
  out: SchemaOut$PaymentLinksResourceInvoiceSettings,
};
