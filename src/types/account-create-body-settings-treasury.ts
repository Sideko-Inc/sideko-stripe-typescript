import {
  AccountCreateBodySettingsTreasuryTosAcceptance,
  External$AccountCreateBodySettingsTreasuryTosAcceptance,
  Schemas$AccountCreateBodySettingsTreasuryTosAcceptance,
} from "./account-create-body-settings-treasury-tos-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsTreasury
 */
export type AccountCreateBodySettingsTreasury = {
  tosAcceptance?: AccountCreateBodySettingsTreasuryTosAcceptance | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsTreasury = {
  tos_acceptance?:
    | External$AccountCreateBodySettingsTreasuryTosAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsTreasury
 */
const SchemaIn$AccountCreateBodySettingsTreasury: z.ZodType<
  AccountCreateBodySettingsTreasury, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance:
      Schemas$AccountCreateBodySettingsTreasuryTosAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsTreasury
 */
const SchemaOut$AccountCreateBodySettingsTreasury: z.ZodType<
  External$AccountCreateBodySettingsTreasury, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsTreasury // the object to be transformed
> = z
  .object({
    tosAcceptance:
      Schemas$AccountCreateBodySettingsTreasuryTosAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountCreateBodySettingsTreasury = {
  in: SchemaIn$AccountCreateBodySettingsTreasury,
  out: SchemaOut$AccountCreateBodySettingsTreasury,
};
