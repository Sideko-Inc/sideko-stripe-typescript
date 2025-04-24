import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryFinancialAccountCloseBody,
  Schemas$TreasuryFinancialAccountCloseBody,
  TreasuryFinancialAccountCloseBody,
} from "@sideko-inc/stripe/types/treasury-financial-account-close-body";
import {
  External$TreasuryFinancialAccountCreateBodyFeatures,
  Schemas$TreasuryFinancialAccountCreateBodyFeatures,
  TreasuryFinancialAccountCreateBodyFeatures,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-features";
import {
  External$TreasuryFinancialAccountCreateBodyMetadata,
  Schemas$TreasuryFinancialAccountCreateBodyMetadata,
  TreasuryFinancialAccountCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-metadata";
import {
  External$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  TreasuryFinancialAccountCreateBodyPlatformRestrictions,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-platform-restrictions";
import {
  External$TreasuryFinancialAccountListCreatedObj0,
  Schemas$TreasuryFinancialAccountListCreatedObj0,
  TreasuryFinancialAccountListCreatedObj0,
} from "@sideko-inc/stripe/types/treasury-financial-account-list-created-obj0";
import {
  External$TreasuryFinancialAccountUpdateBody,
  Schemas$TreasuryFinancialAccountUpdateBody,
  TreasuryFinancialAccountUpdateBody,
} from "@sideko-inc/stripe/types/treasury-financial-account-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return FinancialAccounts that were created during the given date interval.
   */
  created?: (TreasuryFinancialAccountListCreatedObj0 | number) | undefined;
  /**
   * An object ID cursor for use in pagination.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit ranging from 1 to 100 (defaults to 10).
   */
  limit?: number | undefined;
  /**
   * An object ID cursor for use in pagination.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?:
    | (External$TreasuryFinancialAccountListCreatedObj0 | number)
    | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z
      .union([
        Schemas$TreasuryFinancialAccountListCreatedObj0.in,
        z.number().int(),
      ])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    created: z
      .union([
        Schemas$TreasuryFinancialAccountListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  financialAccount: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  financial_account: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    financialAccount: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  features?: External$TreasuryFinancialAccountCreateBodyFeatures | undefined;
  metadata?: External$TreasuryFinancialAccountCreateBodyMetadata | undefined;
  nickname?: (string | string) | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountCreateBodyPlatformRestrictions
    | undefined;
  supported_currencies: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: TreasuryFinancialAccountUpdateBody | undefined;
  financialAccount: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$TreasuryFinancialAccountUpdateBody | undefined;
  financial_account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountUpdateBody.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financial_account: "financialAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountUpdateBody.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financialAccount: "financial_account",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CloseRequest
 */
export type CloseRequest = {
  data?: TreasuryFinancialAccountCloseBody | undefined;
  financialAccount: string;
};

/**
 * @internal
 * CloseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CloseRequest = {
  data?: External$TreasuryFinancialAccountCloseBody | undefined;
  financial_account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CloseRequest
 */
const SchemaIn$CloseRequest: z.ZodType<
  CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountCloseBody.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financial_account: "financialAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CloseRequest
 */
const SchemaOut$CloseRequest: z.ZodType<
  External$CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  CloseRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountCloseBody.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financialAccount: "financial_account",
    });
  });

export const Schemas$CloseRequest = {
  in: SchemaIn$CloseRequest,
  out: SchemaOut$CloseRequest,
};
