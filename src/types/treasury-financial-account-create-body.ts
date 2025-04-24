import {
  External$TreasuryFinancialAccountCreateBodyFeatures,
  Schemas$TreasuryFinancialAccountCreateBodyFeatures,
  TreasuryFinancialAccountCreateBodyFeatures,
} from "./treasury-financial-account-create-body-features";
import {
  External$TreasuryFinancialAccountCreateBodyMetadata,
  Schemas$TreasuryFinancialAccountCreateBodyMetadata,
  TreasuryFinancialAccountCreateBodyMetadata,
} from "./treasury-financial-account-create-body-metadata";
import {
  External$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  TreasuryFinancialAccountCreateBodyPlatformRestrictions,
} from "./treasury-financial-account-create-body-platform-restrictions";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBody
 */
export type TreasuryFinancialAccountCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
   */
  features?: TreasuryFinancialAccountCreateBodyFeatures | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryFinancialAccountCreateBodyMetadata | undefined;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: (string | string) | undefined;
  /**
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?:
    | TreasuryFinancialAccountCreateBodyPlatformRestrictions
    | undefined;
  /**
   * The currencies the FinancialAccount can hold a balance in.
   */
  supportedCurrencies: string[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TreasuryFinancialAccountCreateBodyFeatures | undefined)
    | (TreasuryFinancialAccountCreateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (TreasuryFinancialAccountCreateBodyPlatformRestrictions | undefined)
    | string[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBody = {
  expand?: string[] | undefined;
  features?: External$TreasuryFinancialAccountCreateBodyFeatures | undefined;
  metadata?: External$TreasuryFinancialAccountCreateBodyMetadata | undefined;
  nickname?: (string | string) | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountCreateBodyPlatformRestrictions
    | undefined;
  supported_currencies: string[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$TreasuryFinancialAccountCreateBodyFeatures | undefined)
    | (External$TreasuryFinancialAccountCreateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (
        | External$TreasuryFinancialAccountCreateBodyPlatformRestrictions
        | undefined
      )
    | string[]
    | External$TreasuryFinancialAccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBody
 */
const SchemaIn$TreasuryFinancialAccountCreateBody: z.ZodType<
  TreasuryFinancialAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountCreateBodyFeatures.in.optional(),
    metadata: Schemas$TreasuryFinancialAccountCreateBodyMetadata.in.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platform_restrictions:
      Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions.in.optional(),
    supported_currencies: z.array(z.string()),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      metadata: "metadata",
      nickname: "nickname",
      platform_restrictions: "platformRestrictions",
      supported_currencies: "supportedCurrencies",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBody
 */
const SchemaOut$TreasuryFinancialAccountCreateBody: z.ZodType<
  External$TreasuryFinancialAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountCreateBodyFeatures.out.optional(),
    metadata: Schemas$TreasuryFinancialAccountCreateBodyMetadata.out.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platformRestrictions:
      Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions.out.optional(),
    supportedCurrencies: z.array(z.string()),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      metadata: "metadata",
      nickname: "nickname",
      platformRestrictions: "platform_restrictions",
      supportedCurrencies: "supported_currencies",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBody = {
  in: SchemaIn$TreasuryFinancialAccountCreateBody,
  out: SchemaOut$TreasuryFinancialAccountCreateBody,
};
