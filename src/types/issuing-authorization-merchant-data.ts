import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationMerchantData = {
  /**
   * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
   */
  category: string;
  /**
   * The merchant category code for the seller’s business
   */
  categoryCode: string;
  /**
   * City where the seller is located
   */
  city?: string | null | undefined;
  /**
   * Country where the seller is located
   */
  country?: string | null | undefined;
  /**
   * Name of the seller
   */
  name?: string | null | undefined;
  /**
   * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
   */
  networkId: string;
  /**
   * Postal code where the seller is located
   */
  postalCode?: string | null | undefined;
  /**
   * State where the seller is located
   */
  state?: string | null | undefined;
  /**
   * The seller's tax identification number. Currently populated for French merchants only.
   */
  taxId?: string | null | undefined;
  /**
   * An ID assigned by the seller to the location of the sale.
   */
  terminalId?: string | null | undefined;
  /**
   * URL provided by the merchant on a 3DS request
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationMerchantData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationMerchantData = {
  category: string;
  category_code: string;
  city?: string | null | undefined;
  country?: string | null | undefined;
  name?: string | null | undefined;
  network_id: string;
  postal_code?: string | null | undefined;
  state?: string | null | undefined;
  tax_id?: string | null | undefined;
  terminal_id?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationMerchantData
 */
const SchemaIn$IssuingAuthorizationMerchantData: z.ZodType<
  IssuingAuthorizationMerchantData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    category: z.string(),
    category_code: z.string(),
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    network_id: z.string(),
    postal_code: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    tax_id: z.string().nullable().optional(),
    terminal_id: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      category: "category",
      category_code: "categoryCode",
      city: "city",
      country: "country",
      name: "name",
      network_id: "networkId",
      postal_code: "postalCode",
      state: "state",
      tax_id: "taxId",
      terminal_id: "terminalId",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationMerchantData
 */
const SchemaOut$IssuingAuthorizationMerchantData: z.ZodType<
  External$IssuingAuthorizationMerchantData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationMerchantData // the object to be transformed
> = z
  .object({
    category: z.string(),
    categoryCode: z.string(),
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    networkId: z.string(),
    postalCode: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    taxId: z.string().nullable().optional(),
    terminalId: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      category: "category",
      categoryCode: "category_code",
      city: "city",
      country: "country",
      name: "name",
      networkId: "network_id",
      postalCode: "postal_code",
      state: "state",
      taxId: "tax_id",
      terminalId: "terminal_id",
      url: "url",
    });
  });

export const Schemas$IssuingAuthorizationMerchantData = {
  in: SchemaIn$IssuingAuthorizationMerchantData,
  out: SchemaOut$IssuingAuthorizationMerchantData,
};
