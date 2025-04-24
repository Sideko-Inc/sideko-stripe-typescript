import {
  External$TaxProductResourceTaxSettingsStatusDetailsResourcePending,
  Schemas$TaxProductResourceTaxSettingsStatusDetailsResourcePending,
  TaxProductResourceTaxSettingsStatusDetailsResourcePending,
} from "./tax-product-resource-tax-settings-status-details-resource-pending";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxSettingsStatusDetails = {
  active?: Record<string, any> | undefined;
  pending?:
    | TaxProductResourceTaxSettingsStatusDetailsResourcePending
    | undefined;
};

/**
 * @internal
 * TaxProductResourceTaxSettingsStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxSettingsStatusDetails = {
  active?: Record<string, any> | undefined;
  pending?:
    | External$TaxProductResourceTaxSettingsStatusDetailsResourcePending
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxSettingsStatusDetails
 */
const SchemaIn$TaxProductResourceTaxSettingsStatusDetails: z.ZodType<
  TaxProductResourceTaxSettingsStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.record(z.string(), z.any()).optional(),
    pending:
      Schemas$TaxProductResourceTaxSettingsStatusDetailsResourcePending.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      pending: "pending",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxSettingsStatusDetails
 */
const SchemaOut$TaxProductResourceTaxSettingsStatusDetails: z.ZodType<
  External$TaxProductResourceTaxSettingsStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxSettingsStatusDetails // the object to be transformed
> = z
  .object({
    active: z.record(z.string(), z.any()).optional(),
    pending:
      Schemas$TaxProductResourceTaxSettingsStatusDetailsResourcePending.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      pending: "pending",
    });
  });

export const Schemas$TaxProductResourceTaxSettingsStatusDetails = {
  in: SchemaIn$TaxProductResourceTaxSettingsStatusDetails,
  out: SchemaOut$TaxProductResourceTaxSettingsStatusDetails,
};
