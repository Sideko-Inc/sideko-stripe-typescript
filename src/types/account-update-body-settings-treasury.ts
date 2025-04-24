import {
  AccountUpdateBodySettingsTreasuryTosAcceptance,
  External$AccountUpdateBodySettingsTreasuryTosAcceptance,
  Schemas$AccountUpdateBodySettingsTreasuryTosAcceptance,
} from "./account-update-body-settings-treasury-tos-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsTreasury
 */
export type AccountUpdateBodySettingsTreasury = {
  tosAcceptance?: AccountUpdateBodySettingsTreasuryTosAcceptance | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsTreasury = {
  tos_acceptance?:
    | External$AccountUpdateBodySettingsTreasuryTosAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsTreasury
 */
const SchemaIn$AccountUpdateBodySettingsTreasury: z.ZodType<
  AccountUpdateBodySettingsTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance:
      Schemas$AccountUpdateBodySettingsTreasuryTosAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsTreasury
 */
const SchemaOut$AccountUpdateBodySettingsTreasury: z.ZodType<
  External$AccountUpdateBodySettingsTreasury, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsTreasury // the object to be transformed
> = z
  .object({
    tosAcceptance:
      Schemas$AccountUpdateBodySettingsTreasuryTosAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountUpdateBodySettingsTreasury = {
  in: SchemaIn$AccountUpdateBodySettingsTreasury,
  out: SchemaOut$AccountUpdateBodySettingsTreasury,
};
