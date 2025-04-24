import {
  External$TaxProductResourceCustomerDetailsResourceTaxId,
  Schemas$TaxProductResourceCustomerDetailsResourceTaxId,
  TaxProductResourceCustomerDetailsResourceTaxId,
} from "./tax-product-resource-customer-details-resource-tax-id";
import {
  External$TaxProductResourcePostalAddress,
  Schemas$TaxProductResourcePostalAddress,
  TaxProductResourcePostalAddress,
} from "./tax-product-resource-postal-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceCustomerDetails = {
  address?: TaxProductResourcePostalAddress | undefined;
  /**
   * The type of customer address provided.
   */
  addressSource?: ("billing" | "shipping") | null | undefined;
  /**
   * The customer's IP address (IPv4 or IPv6).
   */
  ipAddress?: string | null | undefined;
  /**
   * The customer's tax IDs (for example, EU VAT numbers).
   */
  taxIds: TaxProductResourceCustomerDetailsResourceTaxId[];
  /**
   * The taxability override used for taxation.
   */
  taxabilityOverride: "customer_exempt" | "none" | "reverse_charge";
};

/**
 * @internal
 * TaxProductResourceCustomerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceCustomerDetails = {
  address?: External$TaxProductResourcePostalAddress | undefined;
  address_source?: ("billing" | "shipping") | null | undefined;
  ip_address?: string | null | undefined;
  tax_ids: External$TaxProductResourceCustomerDetailsResourceTaxId[];
  taxability_override: "customer_exempt" | "none" | "reverse_charge";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceCustomerDetails
 */
const SchemaIn$TaxProductResourceCustomerDetails: z.ZodType<
  TaxProductResourceCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TaxProductResourcePostalAddress.in.optional(),
    address_source: z.enum(["billing", "shipping"]).nullable().optional(),
    ip_address: z.string().nullable().optional(),
    tax_ids: z.array(Schemas$TaxProductResourceCustomerDetailsResourceTaxId.in),
    taxability_override: z.enum(["customer_exempt", "none", "reverse_charge"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      address_source: "addressSource",
      ip_address: "ipAddress",
      tax_ids: "taxIds",
      taxability_override: "taxabilityOverride",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceCustomerDetails
 */
const SchemaOut$TaxProductResourceCustomerDetails: z.ZodType<
  External$TaxProductResourceCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceCustomerDetails // the object to be transformed
> = z
  .object({
    address: Schemas$TaxProductResourcePostalAddress.out.optional(),
    addressSource: z.enum(["billing", "shipping"]).nullable().optional(),
    ipAddress: z.string().nullable().optional(),
    taxIds: z.array(Schemas$TaxProductResourceCustomerDetailsResourceTaxId.out),
    taxabilityOverride: z.enum(["customer_exempt", "none", "reverse_charge"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      addressSource: "address_source",
      ipAddress: "ip_address",
      taxIds: "tax_ids",
      taxabilityOverride: "taxability_override",
    });
  });

export const Schemas$TaxProductResourceCustomerDetails = {
  in: SchemaIn$TaxProductResourceCustomerDetails,
  out: SchemaOut$TaxProductResourceCustomerDetails,
};
