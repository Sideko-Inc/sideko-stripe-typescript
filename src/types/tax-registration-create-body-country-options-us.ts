import {
  External$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax,
  Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax,
  TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax,
} from "./tax-registration-create-body-country-options-us-local-amusement-tax";
import {
  External$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax,
  Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax,
  TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax,
} from "./tax-registration-create-body-country-options-us-local-lease-tax";
import {
  External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax,
  Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax,
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax,
} from "./tax-registration-create-body-country-options-us-state-sales-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUs
 */
export type TaxRegistrationCreateBodyCountryOptionsUs = {
  localAmusementTax?:
    | TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax
    | undefined;
  localLeaseTax?:
    | TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax
    | undefined;
  state: string;
  stateSalesTax?:
    | TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax
    | undefined;
  type:
    | "local_amusement_tax"
    | "local_lease_tax"
    | "state_communications_tax"
    | "state_retail_delivery_fee"
    | "state_sales_tax";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUs = {
  local_amusement_tax?:
    | External$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax
    | undefined;
  local_lease_tax?:
    | External$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax
    | undefined;
  state: string;
  state_sales_tax?:
    | External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax
    | undefined;
  type:
    | "local_amusement_tax"
    | "local_lease_tax"
    | "state_communications_tax"
    | "state_retail_delivery_fee"
    | "state_sales_tax";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUs
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUs: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUs, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    local_amusement_tax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax.in.optional(),
    local_lease_tax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax.in.optional(),
    state: z.string(),
    state_sales_tax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUs
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUs: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUs, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUs // the object to be transformed
> = z
  .object({
    localAmusementTax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax.out.optional(),
    localLeaseTax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax.out.optional(),
    state: z.string(),
    stateSalesTax:
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax.out.optional(),
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

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUs = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUs,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUs,
};
