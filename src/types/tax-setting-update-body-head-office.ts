import {
  External$TaxSettingUpdateBodyHeadOfficeAddress,
  Schemas$TaxSettingUpdateBodyHeadOfficeAddress,
  TaxSettingUpdateBodyHeadOfficeAddress,
} from "./tax-setting-update-body-head-office-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The place where your business is located.
 */
export type TaxSettingUpdateBodyHeadOffice = {
  address: TaxSettingUpdateBodyHeadOfficeAddress;
};

/**
 * @internal
 * TaxSettingUpdateBodyHeadOffice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxSettingUpdateBodyHeadOffice = {
  address: External$TaxSettingUpdateBodyHeadOfficeAddress;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxSettingUpdateBodyHeadOffice
 */
const SchemaIn$TaxSettingUpdateBodyHeadOffice: z.ZodType<
  TaxSettingUpdateBodyHeadOffice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TaxSettingUpdateBodyHeadOfficeAddress.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxSettingUpdateBodyHeadOffice
 */
const SchemaOut$TaxSettingUpdateBodyHeadOffice: z.ZodType<
  External$TaxSettingUpdateBodyHeadOffice, // output type of this zod object
  z.ZodTypeDef,
  TaxSettingUpdateBodyHeadOffice // the object to be transformed
> = z
  .object({
    address: Schemas$TaxSettingUpdateBodyHeadOfficeAddress.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$TaxSettingUpdateBodyHeadOffice = {
  in: SchemaIn$TaxSettingUpdateBodyHeadOffice,
  out: SchemaOut$TaxSettingUpdateBodyHeadOffice,
};
