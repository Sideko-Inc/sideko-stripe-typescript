import {
  External$TaxCalculationCreateBodyCustomerDetailsAddress,
  Schemas$TaxCalculationCreateBodyCustomerDetailsAddress,
  TaxCalculationCreateBodyCustomerDetailsAddress,
} from "./tax-calculation-create-body-customer-details-address";
import {
  External$TaxCalculationCreateBodyCustomerDetailsTaxIdsItem,
  Schemas$TaxCalculationCreateBodyCustomerDetailsTaxIdsItem,
  TaxCalculationCreateBodyCustomerDetailsTaxIdsItem,
} from "./tax-calculation-create-body-customer-details-tax-ids-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the customer, including address and tax IDs.
 */
export type TaxCalculationCreateBodyCustomerDetails = {
  address?: TaxCalculationCreateBodyCustomerDetailsAddress | undefined;
  addressSource?: ("billing" | "shipping") | undefined;
  ipAddress?: string | undefined;
  taxIds?: TaxCalculationCreateBodyCustomerDetailsTaxIdsItem[] | undefined;
  taxabilityOverride?:
    | ("customer_exempt" | "none" | "reverse_charge")
    | undefined;
};

/**
 * @internal
 * TaxCalculationCreateBodyCustomerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationCreateBodyCustomerDetails = {
  address?: External$TaxCalculationCreateBodyCustomerDetailsAddress | undefined;
  address_source?: ("billing" | "shipping") | undefined;
  ip_address?: string | undefined;
  tax_ids?:
    | External$TaxCalculationCreateBodyCustomerDetailsTaxIdsItem[]
    | undefined;
  taxability_override?:
    | ("customer_exempt" | "none" | "reverse_charge")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationCreateBodyCustomerDetails
 */
const SchemaIn$TaxCalculationCreateBodyCustomerDetails: z.ZodType<
  TaxCalculationCreateBodyCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address:
      Schemas$TaxCalculationCreateBodyCustomerDetailsAddress.in.optional(),
    address_source: z.enum(["billing", "shipping"]).optional(),
    ip_address: z.string().optional(),
    tax_ids: z
      .array(Schemas$TaxCalculationCreateBodyCustomerDetailsTaxIdsItem.in)
      .optional(),
    taxability_override: z
      .enum(["customer_exempt", "none", "reverse_charge"])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationCreateBodyCustomerDetails
 */
const SchemaOut$TaxCalculationCreateBodyCustomerDetails: z.ZodType<
  External$TaxCalculationCreateBodyCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationCreateBodyCustomerDetails // the object to be transformed
> = z
  .object({
    address:
      Schemas$TaxCalculationCreateBodyCustomerDetailsAddress.out.optional(),
    addressSource: z.enum(["billing", "shipping"]).optional(),
    ipAddress: z.string().optional(),
    taxIds: z
      .array(Schemas$TaxCalculationCreateBodyCustomerDetailsTaxIdsItem.out)
      .optional(),
    taxabilityOverride: z
      .enum(["customer_exempt", "none", "reverse_charge"])
      .optional(),
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

export const Schemas$TaxCalculationCreateBodyCustomerDetails = {
  in: SchemaIn$TaxCalculationCreateBodyCustomerDetails,
  out: SchemaOut$TaxCalculationCreateBodyCustomerDetails,
};
