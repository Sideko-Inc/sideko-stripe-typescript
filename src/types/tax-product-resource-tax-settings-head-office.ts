import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxSettingsHeadOffice = {
  address: Address;
};

/**
 * @internal
 * TaxProductResourceTaxSettingsHeadOffice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxSettingsHeadOffice = {
  address: External$Address;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxSettingsHeadOffice
 */
const SchemaIn$TaxProductResourceTaxSettingsHeadOffice: z.ZodType<
  TaxProductResourceTaxSettingsHeadOffice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxSettingsHeadOffice
 */
const SchemaOut$TaxProductResourceTaxSettingsHeadOffice: z.ZodType<
  External$TaxProductResourceTaxSettingsHeadOffice, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxSettingsHeadOffice // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$TaxProductResourceTaxSettingsHeadOffice = {
  in: SchemaIn$TaxProductResourceTaxSettingsHeadOffice,
  out: SchemaOut$TaxProductResourceTaxSettingsHeadOffice,
};
