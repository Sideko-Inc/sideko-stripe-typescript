import {
  External$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax,
  Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax,
  TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax,
} from "./tax-product-registrations-resource-country-options-us-local-amusement-tax";
import {
  External$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax,
  Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax,
  TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax,
} from "./tax-product-registrations-resource-country-options-us-local-lease-tax";
import {
  External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax,
  Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax,
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax,
} from "./tax-product-registrations-resource-country-options-us-state-sales-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsUnitedStates = {
  localAmusementTax?:
    | TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
    | undefined;
  localLeaseTax?:
    | TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
    | undefined;
  /**
   * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
   */
  state: string;
  stateSalesTax?:
    | TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
    | undefined;
  /**
   * Type of registration in the US.
   */
  type:
    | "local_amusement_tax"
    | "local_lease_tax"
    | "state_communications_tax"
    | "state_retail_delivery_fee"
    | "state_sales_tax";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsUnitedStates without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsUnitedStates =
  {
    local_amusement_tax?:
      | External$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
      | undefined;
    local_lease_tax?:
      | External$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
      | undefined;
    state: string;
    state_sales_tax?:
      | External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
      | undefined;
    type:
      | "local_amusement_tax"
      | "local_lease_tax"
      | "state_communications_tax"
      | "state_retail_delivery_fee"
      | "state_sales_tax";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsUnitedStates
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsUnitedStates: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsUnitedStates, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    local_amusement_tax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax.in.optional(),
    local_lease_tax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax.in.optional(),
    state: z.string(),
    state_sales_tax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax.in.optional(),
    type: z.enum([
      "local_amusement_tax",
      "local_lease_tax",
      "state_communications_tax",
      "state_retail_delivery_fee",
      "state_sales_tax",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      local_amusement_tax: "localAmusementTax",
      local_lease_tax: "localLeaseTax",
      state: "state",
      state_sales_tax: "stateSalesTax",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsUnitedStates
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsUnitedStates: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsUnitedStates, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsUnitedStates // the object to be transformed
> = z
  .object({
    localAmusementTax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax.out.optional(),
    localLeaseTax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax.out.optional(),
    state: z.string(),
    stateSalesTax:
      Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax.out.optional(),
    type: z.enum([
      "local_amusement_tax",
      "local_lease_tax",
      "state_communications_tax",
      "state_retail_delivery_fee",
      "state_sales_tax",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      localAmusementTax: "local_amusement_tax",
      localLeaseTax: "local_lease_tax",
      state: "state",
      stateSalesTax: "state_sales_tax",
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsUnitedStates =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsUnitedStates,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsUnitedStates,
  };
