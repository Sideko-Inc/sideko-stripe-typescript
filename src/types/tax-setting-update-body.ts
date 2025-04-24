import {
  External$TaxSettingUpdateBodyDefaults,
  Schemas$TaxSettingUpdateBodyDefaults,
  TaxSettingUpdateBodyDefaults,
} from "./tax-setting-update-body-defaults";
import {
  External$TaxSettingUpdateBodyHeadOffice,
  Schemas$TaxSettingUpdateBodyHeadOffice,
  TaxSettingUpdateBodyHeadOffice,
} from "./tax-setting-update-body-head-office";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxSettingUpdateBody
 */
export type TaxSettingUpdateBody = {
  /**
   * Default configuration to be used on Stripe Tax calculations.
   */
  defaults?: TaxSettingUpdateBodyDefaults | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The place where your business is located.
   */
  headOffice?: TaxSettingUpdateBodyHeadOffice | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TaxSettingUpdateBodyDefaults | undefined)
    | (string[] | undefined)
    | (TaxSettingUpdateBodyHeadOffice | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxSettingUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxSettingUpdateBody = {
  defaults?: External$TaxSettingUpdateBodyDefaults | undefined;
  expand?: string[] | undefined;
  head_office?: External$TaxSettingUpdateBodyHeadOffice | undefined;

  [additionalProperty: string]:
    | (External$TaxSettingUpdateBodyDefaults | undefined)
    | (string[] | undefined)
    | (External$TaxSettingUpdateBodyHeadOffice | undefined)
    | External$TaxSettingUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxSettingUpdateBody
 */
const SchemaIn$TaxSettingUpdateBody: z.ZodType<
  TaxSettingUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    defaults: Schemas$TaxSettingUpdateBodyDefaults.in.optional(),
    expand: z.array(z.string()).optional(),
    head_office: Schemas$TaxSettingUpdateBodyHeadOffice.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      expand: "expand",
      head_office: "headOffice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxSettingUpdateBody
 */
const SchemaOut$TaxSettingUpdateBody: z.ZodType<
  External$TaxSettingUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxSettingUpdateBody // the object to be transformed
> = z
  .object({
    defaults: Schemas$TaxSettingUpdateBodyDefaults.out.optional(),
    expand: z.array(z.string()).optional(),
    headOffice: Schemas$TaxSettingUpdateBodyHeadOffice.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      expand: "expand",
      headOffice: "head_office",
    });
  });

export const Schemas$TaxSettingUpdateBody = {
  in: SchemaIn$TaxSettingUpdateBody,
  out: SchemaOut$TaxSettingUpdateBody,
};
