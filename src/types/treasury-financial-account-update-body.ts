import {
  External$TreasuryFinancialAccountUpdateBodyFeatures,
  Schemas$TreasuryFinancialAccountUpdateBodyFeatures,
  TreasuryFinancialAccountUpdateBodyFeatures,
} from "./treasury-financial-account-update-body-features";
import {
  External$TreasuryFinancialAccountUpdateBodyForwardingSettings,
  Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings,
  TreasuryFinancialAccountUpdateBodyForwardingSettings,
} from "./treasury-financial-account-update-body-forwarding-settings";
import {
  External$TreasuryFinancialAccountUpdateBodyMetadata,
  Schemas$TreasuryFinancialAccountUpdateBodyMetadata,
  TreasuryFinancialAccountUpdateBodyMetadata,
} from "./treasury-financial-account-update-body-metadata";
import {
  External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
  Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
  TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
} from "./treasury-financial-account-update-body-platform-restrictions";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBody
 */
export type TreasuryFinancialAccountUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.
   */
  features?: TreasuryFinancialAccountUpdateBodyFeatures | undefined;
  /**
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?:
    | TreasuryFinancialAccountUpdateBodyForwardingSettings
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryFinancialAccountUpdateBodyMetadata | undefined;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: (string | string) | undefined;
  /**
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?:
    | TreasuryFinancialAccountUpdateBodyPlatformRestrictions
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TreasuryFinancialAccountUpdateBodyFeatures | undefined)
    | (TreasuryFinancialAccountUpdateBodyForwardingSettings | undefined)
    | (TreasuryFinancialAccountUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (TreasuryFinancialAccountUpdateBodyPlatformRestrictions | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBody = {
  expand?: string[] | undefined;
  features?: External$TreasuryFinancialAccountUpdateBodyFeatures | undefined;
  forwarding_settings?:
    | External$TreasuryFinancialAccountUpdateBodyForwardingSettings
    | undefined;
  metadata?: External$TreasuryFinancialAccountUpdateBodyMetadata | undefined;
  nickname?: (string | string) | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$TreasuryFinancialAccountUpdateBodyFeatures | undefined)
    | (
        | External$TreasuryFinancialAccountUpdateBodyForwardingSettings
        | undefined
      )
    | (External$TreasuryFinancialAccountUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (
        | External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions
        | undefined
      )
    | External$TreasuryFinancialAccountUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBody
 */
const SchemaIn$TreasuryFinancialAccountUpdateBody: z.ZodType<
  TreasuryFinancialAccountUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountUpdateBodyFeatures.in.optional(),
    forwarding_settings:
      Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings.in.optional(),
    metadata: Schemas$TreasuryFinancialAccountUpdateBodyMetadata.in.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platform_restrictions:
      Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      forwarding_settings: "forwardingSettings",
      metadata: "metadata",
      nickname: "nickname",
      platform_restrictions: "platformRestrictions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBody
 */
const SchemaOut$TreasuryFinancialAccountUpdateBody: z.ZodType<
  External$TreasuryFinancialAccountUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountUpdateBodyFeatures.out.optional(),
    forwardingSettings:
      Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings.out.optional(),
    metadata: Schemas$TreasuryFinancialAccountUpdateBodyMetadata.out.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platformRestrictions:
      Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      forwardingSettings: "forwarding_settings",
      metadata: "metadata",
      nickname: "nickname",
      platformRestrictions: "platform_restrictions",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBody = {
  in: SchemaIn$TreasuryFinancialAccountUpdateBody,
  out: SchemaOut$TreasuryFinancialAccountUpdateBody,
};
